import { BasePage } from './BasePage';
import { CheckoutCompleteLocator as L } from '../locators/checkoutComplete.locator';
import { checkoutSuccessMessage } from '../fixtures/testData';
import { expect } from '../fixtures/baseFixture';

export class CheckoutCompletePage extends BasePage {
  async verify_success_message() {
    await expect(this.page.locator(L.completeHeader)).toHaveText(checkoutSuccessMessage.header);
    await expect(this.page.locator(L.completeText)).toHaveText(checkoutSuccessMessage.text);     
  }
}
