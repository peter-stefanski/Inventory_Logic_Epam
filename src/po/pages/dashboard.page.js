class DashboardPage {
  async open() {
    await browser.url("https://www.saucedemo.com");
  }
}

module.exports = DashboardPage;
