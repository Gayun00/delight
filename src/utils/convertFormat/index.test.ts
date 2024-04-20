import { expect, it, describe } from "vitest";
import { addDollarSign, formatDateTime } from ".";

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
