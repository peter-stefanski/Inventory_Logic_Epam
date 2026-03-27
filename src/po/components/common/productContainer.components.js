class ProductContainer {
  get allItems() {
    return $$("//div[@data-test='inventory-item']");
  }
}
module.exports = ProductContainer;
