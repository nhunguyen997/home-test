import { BasePage } from './BasePage';
import { Product } from '../type/type';
import { CheckoutStepTwoLocator as L } from '../locators/checkoutStepTwo.locator';
import { expect } from '../fixtures/baseFixture';

export class CheckoutStepTwoPage extends BasePage {
    async verify_item_in_checkout(product: Product, quantity: number) {
        const item = this.page.locator(L.itemContainer).filter({
            has: this.page.locator(L.itemName, { hasText: product.name }),
        });
        await item.waitFor({ state: 'visible', timeout: 5000 });
        await expect(item.locator(L.itemDesc)).toHaveText(product.desc);
        await expect(item.locator(L.itemPrice)).toHaveText(product.price);
        await expect(item.locator(L.itemQuantity)).toHaveText(quantity.toString());
    }

    private parse_money(text: string): number {
        return Number(text.replace(/[^0-9.]/g, ''));
    }

    async verify_totals() {
        // 1. Calculate subtotal from items
        const prices = await this.page.locator(L.itemPrice).allTextContents();
        const quantities = await this.page.locator(L.itemQuantity).allTextContents();

        let calculatedSubtotal = 0;

        for (let i = 0; i < prices.length; i++) {
            const price = this.parse_money(prices[i]);
            const quantity = Number(quantities[i]);
            calculatedSubtotal += price * quantity;
        }

        // 2. Read displayed values
        const displayedSubtotalText = await this.page.locator(L.subtotal).innerText();
        const displayedTaxText = await this.page.locator(L.tax).innerText();
        const displayedTotalText = await this.page.locator(L.total).innerText();

        const displayedSubtotal = this.parse_money(displayedSubtotalText);
        const tax = this.parse_money(displayedTaxText);
        const total = this.parse_money(displayedTotalText);

        // 3. Assertions
        expect(displayedSubtotal).toBeCloseTo(calculatedSubtotal, 2);
        expect(tax).toBeGreaterThan(0);
        expect(total).toBeCloseTo(displayedSubtotal + tax, 2);
    }

    async click_finish_button() {
        await this.page.click(L.finishBtn);
    }
}
