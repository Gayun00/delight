import { expect, test } from "vitest";
import { addDollarSign } from ".";

test("- 혹은 + 문자열 뒤에 $을 삽입한다", () => {
  expect(addDollarSign("-300")).toBe("-$300");
});
