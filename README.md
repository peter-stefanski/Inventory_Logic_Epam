# Sorting Validation Test (WebdriverIO)

## How to Run Tests

To run this project locally, make sure you have the following installed:

- Node.js
- npm (comes with Node.js)
- WebdriverIO (installed via project dependencies)

### Steps:

1. Install dependencies:
   `npm install`

2. Run tests:
   `npm test`

---

## 1.Purpose of UC-1 Sorting Validation (UC-1.spec.js)

The purpose of this test is to verify that products on the inventory page are correctly sorted from the lowest price to the highest price.

---

## Test Scenario

The test performs the following steps:

1. Open the application.
2. Log in using valid credentials:
   - Username: standard_user
   - Password: secret_sauce

3. Wait until the inventory page is fully loaded.
4. Select sorting option: **"Price (low to high)"** using XPath locator.
5. Collect all product prices displayed on the page using XPath.
6. Convert prices from text format (e.g. "$29.99") to numeric values.
7. Verify that the prices are sorted in ascending order.

---

## Validation Logic

- All product prices are stored in an array.
- The test iterates through the array using a loop.
- Each price is compared with the previous one.
- If any price is lower than the previous price → the test fails.
- If all prices are in ascending order → the test passes.

---

## Locators Strategy

- XPath locators are used throughout the test.
- Text-based selection is applied where possible (e.g. selecting elements by visible text like "Login", "Add to cart", or "Remove").
- XPath expressions use attributes such as `placeholder`, `value`, and element text to locate elements.
- Relative XPath (e.g. `.//`) is used to search within specific elements.

---

## Expected Result

- Products should be displayed in ascending order (from lowest to highest price).
- The test should pass only if the sorting is correct.

---

## Notes

- The test works with dynamic data from the UI (no hardcoded values).
- Proper waits are used to ensure elements are loaded before interaction.

## 2.Purpose of UC-2 Cart State Logic: (UC-2.spec.js)

The purpose of this test is to verify that adding and removing products from the cart works correctly, and that the cart badge updates properly.

## Test Scenario

The test performs the following steps:

1. Open the application.
2. Log in using valid credentials:
   - Username: standard_user
   - Password: secret_sauce
3. Wait until the inventory page is fully loaded.
4. Collect all products displayed on the page using XPath.
5. Click "Add to cart" on the first two products using relative XPath.
6. Verify that the cart badge shows `2` items.
7. Click "Remove" on the first product using relative XPath.
8. Verify that the cart badge now shows `1` item.

## Validation Logic

- Products are collected into an array using XPath.
- Actions like Add or Remove are performed on elements relative to each product container.
- Cart badge value is retrieved and converted to numeric format.
- Assertions check that the cart badge updates correctly after each operation.
- If the badge value does not match the expected number → the test fails.

## Locators Strategy

- XPath locators are used for all element selections.
- Relative XPath (e.g., `.//button[contains(text(),'Add to cart')]`) is applied to find buttons within product containers.
- Text-based selection is used to distinguish between Add and Remove buttons.
- Stable attributes like `id` and `data-test` are also referenced where needed.
- Proper waits ensure elements are displayed before interaction.

## Expected Result

- After adding two products, the cart badge shows `2`.
- After removing one product, the cart badge shows `1`.
- The test passes only if the cart updates correctly after each action.

## Notes

- The test works with dynamic data from the inventory (products are not hardcoded).
- Click actions use relative XPath to avoid dependency on product order or IDs.
- Proper waits ensure all elements are loaded and visible before interaction.
