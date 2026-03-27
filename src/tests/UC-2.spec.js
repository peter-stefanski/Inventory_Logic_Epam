const DashboardPage = require("./../po/pages/dashboard.page");
const dashboardPage = new DashboardPage();

const LoginPage = require("../po/pages/login.page");
const loginPage = new LoginPage();

const ProductContainer = require("./../po/components/common/productContainer.components");
const productContainer = new ProductContainer();

const ProductList = require("./../po/components/common/productList.component");
const productList = new ProductList();

const ShoppingBadge = require("./../po/components/common/shoppingBadge.component");
const shoppingBadge = new ShoppingBadge();

describe("Sorting Validation", () => {
  beforeEach(async () => {
    await dashboardPage.open();
    await expect(browser).toHaveTitle("Swag Labs");
    await loginPage.login("standard_user", "secret_sauce");
  });

  it("Check page title", async () => {
    const products = await productList.list;

    await products[0].waitForDisplayed({ timeout: 10000 });

    await expect(products[0]).toBeDisplayed();

    const items = await productContainer.allItems;

    await items[0]
      .$("//button[@class='btn btn_primary btn_small btn_inventory ']")
      .click();
    await items[1]
      .$("//button[@class='btn btn_primary btn_small btn_inventory ']")
      .click();

    const badgeCount = parseInt(await shoppingBadge.badge.getText());
    await expect(badgeCount).toBe(2);

    await items[0].$(".//button[text()='Remove']").click();

    const updatedBadgeCount = parseInt(await shoppingBadge.badge.getText());
    await expect(updatedBadgeCount).toBe(1);
  });
});
