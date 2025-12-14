# SauceDemo Playwright Test Suite

Automated user journeys for the SauceDemo ecommerce site using Playwright (TypeScript) with a Page Object Model for reliability and maintainability.

## Prerequisites
- Node.js >= 18
- Git

<!-- ## Install
```bash
git clone https://github.com/your-username/saucedemo-playwright.git
cd saucedemo-playwright
npm install
npx playwright install -->

## Running Tests
Install dependencies
npm install

Open Playwright UI mode
npx playwright test --ui

Run all tests
npx playwright test

Run a specific test
npx playwright test tests/checkout.spec.ts

Run with headed
npx playwright test --headed

Generate report
npx playwright show-report