class ProductList {
  get list() {
    return $$("//div[@data-test='inventory-list']");
  }
}
module.exports = ProductList;
