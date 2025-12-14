import { Page, expect } from '@playwright/test';


export class BasePage {
    constructor(protected page: Page) { }

    domain = 'https://www.saucedemo.com';
    async goto(url: string) {
        await this.page.goto(this.domain + url, { waitUntil: 'networkidle' });
    }

    async waitForPageLoaded(locator: string) {
        await this.page.waitForSelector(locator, { state: 'visible' });
    }

    async fill(selector: string, value: string) {
        await this.page.locator(selector).fill(value);
    }

    async click(selector: string) {
        await this.page.locator(selector).click();
    }

    async safeClick(selector: string) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        await expect(element).toBeEnabled();
        await element.click();
    }

    async safeFill(selector: string, value: string) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        await expect(element).toBeEditable();
        await element.fill(value);
    }

    async waitForVisible(selector: string, timeout = 3000) {
        await this.page.waitForSelector(selector, {
            state: 'visible',
            timeout,
        });
    }

    async gotoWithLoginCheck(url: string, loginFn: () => Promise<void>) {
        await this.page.goto(url);
        const currentUrl = this.page.url();
        if (!currentUrl.includes(url)) {
            console.log(`URL does not contain "${url}". Logging in...`);
            await loginFn();
            await this.page.goto(url);
        }
        await expect(this.page).toHaveURL(new RegExp(url));
    }

    async assertCurrentUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(new RegExp(expectedUrl));
    }


}
