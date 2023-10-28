const sum = require("../sum");

test("sum 111111", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum 22222", () => {
  expect(sum(2, 3)).toBe(5);
});
