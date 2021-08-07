const hello = require("../hello");

test("greets the user", () => {
  expect(hello("John")).toMatchSnapshot();
});
