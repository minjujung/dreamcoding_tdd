const Calculator = require("../calculator.js");

describe("Calculator", () => {
  it("init with 0", () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    const cal = new Calculator();
    cal.set(2);
    expect(cal.value).toBe(2);
  });
});
