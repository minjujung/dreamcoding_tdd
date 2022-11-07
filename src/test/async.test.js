const fetchProduct = require("../async.js");

/**
 * 내가 시도한 방법
 */
describe("fetch product function test", () => {
  it("get item Milk and price 200 if not error", () => {
    return fetchProduct("not error").then((data) => {
      expect(data.item).toBe("Milk");
      expect(data.price).toBe(200);
    });
  });

  it("throw network error if arg is error", () => {
    return expect(fetchProduct("error")).rejects.toMatch("network error!");
  });
});

/**
 * 수업에서 제시한 다양한 방법
 */
describe("Async", () => {
  // 비동기 함수는 그냥 실행하면 제대로 실행되지 않고 test 자체가
  // 끝나버리므로 값은 올바르지 않으나 test 자체는 정상적으로 실행 되었다고 말해줌

  //수동적으로 done 넣어서 async 함수가 끝나는 시점에 test 도 종료 시키기
  //done 사용은 너무 느려서 비추
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  //보통은 아래 두 방식
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  //색다른 방법
  it("async - resoleves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error!");
  });
});
