# TEST PLAN

### Test case
A. Login & Inventory Validation
TC-A1: Login with invalid credentials
TC-A2: Login with valid credentials
TC-A3: Inventory list loads and has at least one item with details

B️. Sorting Functionality
TC-B1: Sort by Name (A → Z)
TC-B2: Sort by Name (Z → A)
TC-B3: Sort by Price (Low → High)
TC-B4: Sort by Price (High → Low)

C️. Cart & Checkout Flow
TC-C1: Add 2 products to cart
TC-C2: Remove product from cart
TC-C3: Complete checkout successfully

D️. Email Validation Function
TC-D1: Validate email formats
TC-D2: Detect duplicate emails

### Additional tests
A. Login & User Handling
- Attempt login with the remaining demo users and verify the corresponding error messages.
- Attempt login with empty username, empty password, or both fields empty, and validate the error messages.

B. Inventory & Product Details
- Verify that all products have valid images.
- Click Add to Cart and check that the button changes to Remove, then click Remove and check that it changes back to Add to Cart.

C. Sorting
- After applying a sort option, refresh the page and verify that the selected sort option persists.

D. Cart & Checkout
- Add multiple products and then remove all of them, ensuring the cart is empty.
- Verify that the badge count on the cart icon matches the actual number of products in the cart (Add/Remove)
- From checkout, navigate back to the inventory page and confirm the cart contents remain accurate.
- From checkout, click the Continue Shopping button to return to the inventory page and confirm the cart contents remain accurate.
- Validate that appropriate error messages are displayed when first name, last name, or postal code fields are left blank.
- At checkout step 2, click Cancel and verify that you return to checkout step 1.

### Any risks or flaky areas 
Data dependency
- Tests rely on fixed product data (names, prices, descriptions)
- Any change in test data on the SauceDemo site could affect assertions

Environment-specific behavior
- The SauceDemo site is a public demo application. Occasional instability or maintenance on the site could cause intermittent failures unrelated to test logic.


### Questions or assumptions 
Assumptions:
- I assumed that the SauceDemo application is a stable demo environment, so product data (names, prices, tax rate) does not change frequently.
- I assumed that sorting options and labels (e.g. “Name (A to Z)”, “Price (low to high)”) remain consistent and are not localized.
- I assumed that tax calculation logic is handled by the backend, therefore the UI displays correct tax values based on item prices.
- I assumed that each product has a unique name, which can be safely used as an identifier in UI assertions.

Questions:
- Should product components (name, description, price, quantity) be extracted into a shared Product or Component class, or is a small amount of duplication acceptable for a limited test scope?
- Should login be handled as a global setup / fixture (executed once per test suite) or explicitly within individual tests for better test isolation?
- Is it acceptable to rely on UI-displayed prices for validating totals, or should prices come exclusively from test data?