import { users, products } from '../src/fixtures/testData';
import { expect, test } from '../src/fixtures/baseFixture';
import { list_url, inventory_sort } from '../src/fixtures/uiConstants';
import { InventoryLocator as L } from '../src/locators/inventory.locator';

test.describe('Verify sorting functionality', () => {
    test('Sort products by name (A to Z)', async ({ loginPage, inventoryPage }) => {
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => await loginPage.login(users.valid.username, users.valid.password)
        );
        await inventoryPage.sort_items_by(inventory_sort.NAME_ASC);
        await inventoryPage.verify_sorted_items_by_name_asc();
    });

    test('Sort products by name (Z to A)', async ({ loginPage, inventoryPage }) => {
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => await loginPage.login(users.valid.username, users.valid.password)
        );

        await inventoryPage.sort_items_by(inventory_sort.NAME_DESC);
        await inventoryPage.verify_sorted_items_by_name_desc();
    });

    test('Sort products by price (low to high)', async ({ loginPage, inventoryPage }) => {
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => await loginPage.login(users.valid.username, users.valid.password)
        );
        await inventoryPage.sort_items_by(inventory_sort.PRICE_ASC);
        await inventoryPage.verify_sorted_items_by_price_asc();
    });

    test('Sort products by price (high to low)', async ({ loginPage, inventoryPage }) => {
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => await loginPage.login(users.valid.username, users.valid.password)
        );
        await inventoryPage.sort_items_by(inventory_sort.PRICE_DESC);
        await inventoryPage.verify_sorted_items_by_price_desc();
    });
    
});

