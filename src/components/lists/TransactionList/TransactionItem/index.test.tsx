import { customRender } from "@/utils/testUtils";
import { describe, it, expect } from "vitest";
import TransactionItem from ".";

const data = {
  amount: "4573.84",
  name: "Mr. Chester Kshlerin",
  timestamp: "2023-07-01T00:14:00Z",
  type: "transfer",
};

const data2 = {
  amount: "-1380.95",
  name: "Prince Jules Friesen",
  timestamp: "2023-07-01T00:00:00Z",
  type: "transfer",
};

describe("금액 변환 UI 테스트", () => {
  it("양수인 금액은 +$를 붙여 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data} />);
    expect(getByText("+$4573.84")).toBeDefined();
  });

  it("음수인 금액은 -$를 붙여 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data2} />);
    expect(getByText("-$1380.95")).toBeDefined();
  });
});

describe("시간 변환 UI 테스트", () => {
  it("timeStamp를 시간.분 오전/오후 포맷으로 변환해 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data} />);
    expect(getByText("9.14 AM")).toBeDefined();

    const { getByText: getByText2 } = customRender(
      <TransactionItem {...data2} />
    );
    expect(getByText2("9.00 AM")).toBeDefined();
  });
});

describe("type UI 테스트", () => {
  it("transfer로 들어온 값을 Transfer로 첫 글자를 대문자로 바꿔 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data} />);
    expect(getByText("Transfer")).toBeDefined();
  });
});
