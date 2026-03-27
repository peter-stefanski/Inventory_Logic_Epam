class ShoppingBadge {
  get badge() {
    return $("//span[@data-test='shopping-cart-badge']");
  }
}
module.exports = ShoppingBadge;
