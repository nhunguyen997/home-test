# TEST PLAN

This document outlines high-level test cases for the sample e2e test suite.

1. Login & Inventory
   - Verify successful login with valid credentials
   - Verify inventory list is visible after login

2. Sorting
   - Verify sort by price/name works

3. Cart & Checkout
   - Add items to cart, verify cart contents
   - Complete checkout flow

4. Email validation
   - Unit tests for email validation utility


Notes:
- Tests are organized in `tests/`.
- Page objects live in `src/pages`.
