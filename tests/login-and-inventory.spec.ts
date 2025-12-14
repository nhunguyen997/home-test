import { test } from '../src/fixtures/baseFixture.ts';
import { users } from '../src/fixtures/testData.ts';
import { list_url } from '../src/fixtures/uiConstants';

test.describe('Login and Inventory Validation', () => {

    test('Login with invalid credentials', async ({ loginPage }) => {
        await loginPage.goto(list_url.LOGIN);
        await loginPage.login(users.invalid.username, users.invalid.password);
        await loginPage.assertErrorVisible();
    });

    test('Login with valid credentials', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto(list_url.LOGIN);
        await loginPage.login(users.valid.username, users.valid.password);
        await inventoryPage.assertCurrentUrl(list_url.INVENTORY);
    });

    test('Inventory list loads and has at least one item with details', async ({ loginPage, inventoryPage }) => {
        await loginPage.goto(list_url.LOGIN);
        await loginPage.login(users.valid.username, users.valid.password);
        await inventoryPage.assertCurrentUrl(list_url.INVENTORY);
        const itemCount = await inventoryPage.count_items_number();
        test.expect(itemCount).toBeGreaterThan(0);
        await inventoryPage.verify_first_items();
    });
});
