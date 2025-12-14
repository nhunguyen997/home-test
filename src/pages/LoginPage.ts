import { BasePage } from './BasePage';
import { LoginLocator as L } from '../locators/login.locator';


export class LoginPage extends BasePage {

  async login(username: string, password: string) {
    await this.safeFill(L.username, username);
    await this.safeFill(L.password, password);
    await this.safeClick(L.loginButton);
  }

  async assertErrorVisible() {
    await this.waitForVisible(L.errorMessage, 1000);
  }
}
