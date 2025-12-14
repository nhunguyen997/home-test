import { expect, test } from '../src/fixtures/baseFixture';
import { users, products, customerInfo } from '../src/fixtures/testData';
import { list_url, inventory_sort } from '../src/fixtures/uiConstants';
import { InventoryLocator as L } from '../src/locators/inventory.locator';

test.describe('Cart and Checkout Flow', () => {

    test('Add two different products to the cart', async ({ loginPage, inventoryPage, cartPage}) => {
        // 1. Go to inventory with login check
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => loginPage.login(users.valid.username, users.valid.password)
        );

        // 2. Add items to cart
        await inventoryPage.add_item_to_cart_by_name(products.item_1.name);
        await inventoryPage.add_item_to_cart_by_name(products.item_2.name);
        await inventoryPage.safeClick(L.cartLink);
        await cartPage.assertCurrentUrl(list_url.CART);

        // 3. Assert on cart page
        const items_number = await cartPage.count_items_in_cart();
        expect(items_number).toBe(2);
        await cartPage.verify_item_in_cart(products.item_1, 1);
        await cartPage.verify_item_in_cart(products.item_2, 1);
    });

    test('Remove item from cart', async ({ loginPage, inventoryPage, cartPage }) => {
        // 1. Go to inventory with login check
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => loginPage.login(users.valid.username, users.valid.password)
        );

        // 2. Add items to cart
        await inventoryPage.add_item_to_cart_by_name(products.item_1.name);
        await inventoryPage.add_item_to_cart_by_name(products.item_2.name);
        await inventoryPage.safeClick(L.cartLink);
        await cartPage.assertCurrentUrl(list_url.CART);

        // 3. Remove one item and verify
        await cartPage.remove_item_from_cart(products.item_1);
        const itemCount = await cartPage.count_items_in_cart();
        expect(itemCount).toBe(1);
        await cartPage.verify_item_in_cart(products.item_2, 1);

    });

    test('Complete checkout process', async ({ loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        // 1. Go to inventory with login check
        await inventoryPage.gotoWithLoginCheck(
            list_url.INVENTORY,
            async () => loginPage.login(users.valid.username, users.valid.password)
        );

        // 2. Sort items to ensure consistent order
        await inventoryPage.sort_items_by(inventory_sort.NAME_ASC);

        // 3. Add items to cart
        await inventoryPage.add_item_to_cart_by_name(products.item_1.name);
        await inventoryPage.add_item_to_cart_by_name(products.item_2.name);
        await inventoryPage.safeClick(L.cartLink);
        await cartPage.assertCurrentUrl(list_url.CART);

        // 4. Proceed to checkout
        await cartPage.click_checkout();
        await checkoutStepOnePage.assertCurrentUrl(list_url.CHECKOUT_STEP_ONE);

        // 5. Fill customer info
        await checkoutStepOnePage.fill_customer_info({
            firstName: customerInfo.firstName,
            lastName: customerInfo.lastName,
            postalCode: customerInfo.postalCode
        });
        await checkoutStepOnePage.click_continue_button();

        // 6. Step Two - verify summary
        await checkoutStepTwoPage.assertCurrentUrl(list_url.CHECKOUT_STEP_TWO);
        await checkoutStepTwoPage.verify_item_in_checkout(products.item_1, 1);
        await checkoutStepTwoPage.verify_item_in_checkout(products.item_2, 1);
        await checkoutStepTwoPage.verify_totals();
        await checkoutStepTwoPage.click_finish_button();

        // 7. Complete page verification
        await checkoutCompletePage.assertCurrentUrl(list_url.CHECKOUT_COMPLETE);
        await checkoutCompletePage.verify_success_message();
    });

});
