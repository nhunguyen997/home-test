import { BasePage } from './BasePage';
import { InventoryLocator as L } from '../locators/inventory.locator';
import { expect } from '@playwright/test';

export class InventoryPage extends BasePage {

    async count_items_number() {
        const items = await this.page.locator(L.items).count();
        return items;
    }

    async verify_first_items() {
        const items = this.page.locator(L.items);
        const firstItem = items.first();
        await expect(firstItem.locator(L.itemName)).toBeVisible();
        await expect(firstItem.locator(L.itemImage)).toBeVisible();
        await expect(firstItem.locator(L.itemPrice)).toBeVisible();
        await expect(firstItem.locator(L.addToCartBtn)).toBeVisible();
    }

    async sort_items_by(option: string) {
        await this.page.selectOption(L.sortDropdown, { label: option });
    }

    async verify_sorted_items_by_name_asc() {
        const itemNames = await this.page.locator(L.itemName).allTextContents();
        expect(itemNames.length).toBeGreaterThan(1);
        const sortedNames = [...itemNames].sort((a, b) => a.localeCompare(b));
        expect(itemNames).toEqual(sortedNames);
    }

    async verify_sorted_items_by_name_desc() {
        const itemNames = await this.page.locator(L.itemName).allTextContents();
        expect(itemNames.length).toBeGreaterThan(1);
        const sortedNames = [...itemNames].sort((a, b) => b.localeCompare(a));
        expect(itemNames).toEqual(sortedNames);
    }

    async verify_sorted_items_by_price_asc() {
        const itemPricesText = await this.page.locator(L.itemPrice).allTextContents();
        const itemPrices = itemPricesText.map(text => parseFloat(text.replace('$', '')));   
        expect(itemPrices.length).toBeGreaterThan(1);
        const sortedPrices = [...itemPrices].sort((a, b) => a - b);
        expect(itemPrices).toEqual(sortedPrices);
    }

    async verify_sorted_items_by_price_desc() {
        const itemPricesText = await this.page.locator(L.itemPrice).allTextContents();
        const itemPrices = itemPricesText.map(text => parseFloat(text.replace('$', '')));       
        expect(itemPrices.length).toBeGreaterThan(1);
        const sortedPrices = [...itemPrices].sort((a, b) => b - a);
        expect(itemPrices).toEqual(sortedPrices);
    }

    async add_item_to_cart_by_name(productName: string) {
        const item = this.page
            .locator(L.items)
            .filter({ has: this.page.locator(L.itemName, { hasText: productName }) });
        await item.locator(L.addToCartBtn).click();
        }
    }

