import { expect, it, describe } from "vitest";
import {
  addDollarSign,
  capitalizeFirstLetter,
  formatDateTime,
  filterExpenseType,
  sortByTimestamp,
  generateDateArray,
  filterAndSumByDateRange,
  calculateDatesAWeekAgo,
  calculateDatesAMonthAgo,
  filterDatesInDateRange,
} from ".";

const mockData = [
  {
    amount: "4573.84",
    name: "Mr. Chester Kshlerin",
    timestamp: "2023-07-01T00:14:00Z",
    type: "transfer",
  },
  {
    amount: "-750.78",
    name: "Prince Danial Dickens",
    timestamp: "2023-07-01T00:12:00Z",
    type: "transfer",
  },
];

describe("addDollarSign 테스트", () => {
  it("-1380.95를 -$1380.95로 변환한다", () => {
    expect(addDollarSign("-1380.95")).toBe("-$1380.95");
  });

  it("4274.26을 +$4274.26으로 변환한다", () => {
    expect(addDollarSign("4274.26")).toBe("+$4274.26");
  });
});

describe("formatDateTime 테스트", () => {
  it("2023-07-01T00:14:00Z는 9.14 AM으로 변환된다", () => {
    expect(formatDateTime("2023-07-01T00:14:00Z")).toBe("9.14 AM");
  });

  it("2023-07-01T02:42:00Z은 11.42 AM으로 변환된다", () => {
    expect(formatDateTime("2023-07-01T02:42:00Z")).toBe("11.42 AM");
  });
});

describe("capitalizeFirstLetter 테스트", () => {
  it("transfer를 Transfer로 변환", () => {
    expect(capitalizeFirstLetter("transfer")).toBe("Transfer");
  });
});

describe("filterExpenseType 테스트", () => {
  it("음수인 데이터만 필터링해 반환", () => {
    expect(filterExpenseType(mockData)).toEqual([
      {
        amount: "-750.78",
        name: "Prince Danial Dickens",
        timestamp: "2023-07-01T00:12:00Z",
        type: "transfer",
      },
    ]);
  });
});

describe("sortByTimeStamp 테스트", () => {
  it("타임스탬프 순으로 최근 순으로 정렬", () => {
    expect(sortByTimestamp(mockData)).toEqual([
      {
        amount: "4573.84",
        name: "Mr. Chester Kshlerin",
        timestamp: "2023-07-01T00:14:00Z",
        type: "transfer",
      },
      {
        amount: "-750.78",
        name: "Prince Danial Dickens",
        timestamp: "2023-07-01T00:12:00Z",
        type: "transfer",
      },
    ]);
  });
});

describe("generateDateArray 테스트", () => {
  it("날짜 구간에 해당하는 각 날짜 배열 생성", () => {
    expect(generateDateArray("2022-02-23", "2022-02-30")).toEqual([
      "2022-02-23",
      "2022-02-24",
      "2022-02-25",
      "2022-02-26",
      "2022-02-27",
      "2022-02-28",
      "2022-03-01",
      "2022-03-02",
    ]);
  });
});

describe("filterAndSumByDateRange", () => {
  it("입력한 날짜 구간의 amount 총합 배열 생성", () => {
    const result = filterAndSumByDateRange(
      [
        {
          amount: "4573.84",
          name: "Mr. Chester Kshlerin",
          timestamp: "2023-07-01T00:14:00Z",
          type: "transfer",
        },
        {
          amount: "4573.84",
          name: "Mr. Chester Kshlerin",
          timestamp: "2023-07-01T00:16:00Z",
          type: "transfer",
        },
        {
          amount: "-4573.84",
          name: "Mr. Chester Kshlerin",
          timestamp: "2023-07-01T00:14:00Z",
          type: "transfer",
        },
        {
          amount: "-750.78",
          name: "Prince Danial Dickens",
          timestamp: "2023-07-03T00:12:00Z",
          type: "transfer",
        },
      ],
      ["2023-07-01", "2023-07-02"]
    );
    expect(result).toEqual({
      income: [9147.68, 0],
      expense: [4573.84, 0],
    });
  });
});

describe("calculateDatesAWeekAgo, calculateDatesAMonthAgo 테스트", () => {
  it("입력한 날짜로부터 일주일 전 날짜 리턴", () => {
    const result = calculateDatesAWeekAgo("2023-07-30");
    expect(result).toBe("2023-07-23");
  });

  it("입력한 날짜로부터 한달 전 날짜 리턴", () => {
    const result = calculateDatesAMonthAgo("2023-07-30");
    expect(result).toBe("2023-06-30");
  });
});

describe("filterDatesInDateRange 테스트", () => {
  it("입력한 날짜에 해당하는 데이터 필터링", () => {
    const result = filterDatesInDateRange(
      [
        {
          amount: "4573.84",
          name: "Mr. Chester Kshlerin",
          timestamp: "2023-07-01T00:14:00Z",
          type: "transfer",
        },
        {
          amount: "-750.78",
          name: "Prince Danial Dickens",
          timestamp: "2023-07-03T00:12:00Z",
          type: "transfer",
        },
      ],
      "2023-07-01",
      "2023-07-02"
    );
    expect(result).toEqual([
      {
        amount: "4573.84",
        name: "Mr. Chester Kshlerin",
        timestamp: "2023-07-01T00:14:00Z",
        type: "transfer",
      },
    ]);
  });
});
