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

describe("TransactionItem UI 테스트", () => {
  it("양수인 금액은 +$를 붙여 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data} />);
    expect(getByText("+$4573.84")).toBeDefined();
  });

  it("음수인 금액은 -$를 붙여 표시한다", () => {
    const { getByText } = customRender(<TransactionItem {...data2} />);
    expect(getByText("-$1380.95")).toBeDefined();
  });
});
