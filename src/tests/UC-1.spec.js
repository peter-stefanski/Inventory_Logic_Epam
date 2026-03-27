const DashboardPage = require("./../po/pages/dashboard.page");
const dashboardPage = new DashboardPage();

const LoginPage = require("../po/pages/login.page");
const loginPage = new LoginPage();

const ProductSortContainer = require("./../po/components/common/productSortContainer.component");
const productSort = new ProductSortContainer();

const ProductContainer = require("./../po/components/common/productContainer.components");
const productContainer = new ProductContainer();

describe("Sorting Validation", () => {
  beforeEach(async () => {
    await dashboardPage.open();
    await expect(browser).toHaveTitle("Swag Labs");
    await loginPage.login("standard_user", "secret_sauce");
  });

  it("Check if prices are sorted low to high", async () => {
    await productSort.sortDropdown.waitForDisplayed({ timeout: 5000 });
    await productSort.selectSortOption("Price (low to high)");
    await browser.pause(5000);

    const items = await productContainer.allItems;

    let previousPrice = 0;

    for (let i = 0; i < items.length; i++) {
      const text = await items[i].getText();
      const price = parseFloat(text.replace("$", ""));

      if (price < previousPrice) {
        throw new Error(`Prices are not sorted! ${previousPrice} > ${price}`);
      }
      previousPrice = price;
    }
    await expect(true).toBe(true);
  });
});
