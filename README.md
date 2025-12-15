# SauceDemo Playwright Test Suite

Automated user journeys for the SauceDemo ecommerce site using Playwright (TypeScript) with a Page Object Model for reliability and maintainability.

## Prerequisites

- Node.js >= 18
- Git

## Install

Clone the repository:

```bash
git clone https://github.com/nhunguyen997/home-test.git
cd home-test
```

Install dependencies:

```bash
npm install
npx playwright install
```

## Running Tests

Open Playwright UI mode:

```bash
npx playwright test --ui
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test <testscript>
```

For example: npx playwright test checkout.spec

Run with headed:

```bash
npx playwright test --headed
```

Generate report:

```bash
npx playwright show-report
```
