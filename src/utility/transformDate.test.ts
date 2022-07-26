import { transformDate } from "./transformDate";
import { expect, test } from "@jest/globals";

test("new Date('1-1-2000') should be 'Saturday, Jan 1, 2000'", () => {
  expect(transformDate(new Date("1-1-2000"))).toBe("Saturday, Jan 1, 2000");
});

test("new Date('') should be 'Invalid Date'", () => {
  expect(transformDate(new Date(""))).toBe("Invalid Date");
});

test("passing no Date should be 'Invalid Date'", () => {
  expect(transformDate()).toBe("Invalid Date");
});

test("passing null should be UNIX t0", () => {
  expect(transformDate(null)).toBe("Thursday, Jan 1, 1970");
});
