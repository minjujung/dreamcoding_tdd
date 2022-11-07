const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;

  /**
   * 모든 test 시작 전에 실행하는 함수
   * beforeEach
   */
  beforeEach(() => {
    cal = new Calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  it("clear", () => {
    cal.set(2);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(3);
    cal.add(2);
    expect(cal.value).toBe(5);
  });

  it("add should throw error when num > 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("substract", () => {
    cal.set(3);
    cal.substract(4);
    expect(cal.value).toBe(-1);
  });

  it("multiply", () => {
    cal.set(5);
    cal.multiply(2);
    expect(cal.value).toBe(10);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("normal case 4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
