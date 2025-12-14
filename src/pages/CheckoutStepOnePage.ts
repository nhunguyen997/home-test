import { BasePage } from './BasePage';
import { CustomerInfo } from '../type/type';
import { CheckoutStepOneLocator as L } from '../locators/checkoutStepOne.locator';

export class CheckoutStepOnePage extends BasePage {
  async fill_customer_info(info: CustomerInfo ) {
    await this.safeFill(L.firstName, info.firstName);
    await this.safeFill(L.lastName, info.lastName);
    await this.safeFill(L.postalCode, info.postalCode);
  }

  async click_continue_button() {
    await this.page.click(L.continueBtn);
  }
}
