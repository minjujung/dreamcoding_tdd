const ProductService = require("../product_service.js");
const StubProductClient = require("./stub_product_client.js");

/**
 * stub을 사용해서 주입해주는 방식
 */

describe("ProductService - Stub", () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});
