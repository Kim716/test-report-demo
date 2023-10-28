const minus = require("../minus");

test("minus 11111111", () => {
  expect(minus(4, 2)).toBe(2);
});

test("minus 22222222", () => {
  expect(minus(5, 3)).toBe(2);
});

test("minus 333333333", () => {
  expect(minus(3, 3)).toBe(0);
});
