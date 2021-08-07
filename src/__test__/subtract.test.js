const subract = require("../subtract");

test("subtracts 3 - 1 to 2", () => {
  expect(subract(3, 1)).toBe(2);
});
