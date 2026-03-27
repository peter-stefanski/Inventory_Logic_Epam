class ProductSortContainer {
  get sortDropdown() {
    return $("//select[@class='product_sort_container']");
  }

  async selectSortOption(optionText) {
    await this.sortDropdown.selectByVisibleText(optionText);
  }
}

module.exports = ProductSortContainer;
