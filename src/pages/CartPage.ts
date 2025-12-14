import { BasePage } from './BasePage';
import { CartLocator as L } from '../locators/cart.locator';
import { expect } from '../fixtures/baseFixture';
import { Product } from '../type/type';


export class CartPage extends BasePage {
    async verify_item_in_cart(product: Product, quantity: number) {
        // const itemLocator = this.page.locator(L.itemName, { hasText: product.name });
        // const parent = itemLocator.locator('..').locator('..');
        // const description = parent.locator(L.itemDesc);
        // const price = parent.locator(L.itemPrice);
        // const curr_quantity = parent.locator('..').locator(L.itemQuantity);
        // await expect(description).toHaveText(product.desc);
        // await expect(price).toHaveText(product.price);
        // await expect(curr_quantity).toHaveText(quantity.toString());

        const item = this.page.locator(L.cartItems).filter({
            has: this.page.locator(L.itemName, { hasText: product.name }),
        });
        await item.waitFor({ state: 'visible', timeout: 5000 });
        await expect(item.locator(L.itemDesc)).toHaveText(product.desc);
        await expect(item.locator(L.itemPrice)).toHaveText(product.price);
        await expect(item.locator(L.itemQuantity)).toHaveText(quantity.toString());
    }

    async count_items_in_cart() { 
        await this.waitForVisible(L.cartItems);  
        const items = await this.page.locator(L.cartItems).count();
        return items;
    }

    async remove_item_from_cart(product: Product) {
        const itemLocator = this.page.locator(L.itemName, { hasText: product.name });
        const parent = itemLocator.locator('..').locator('..');
        const removeButton = parent.getByRole('button', { name: 'Remove' });
        await removeButton.click();
    }

    async click_checkout() {
        await this.page.click(L.checkoutButton);
    }

}