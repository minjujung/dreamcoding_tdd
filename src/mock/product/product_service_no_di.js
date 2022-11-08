const ProductClient = require("./product_client");

class ProductService {
  // 의존성 주입에 어긋나는 코드
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
