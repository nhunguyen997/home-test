import { Product } from "../type/type";

export const users = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  invalid: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  }
};

export const checkoutSuccessMessage = {
  "header": "Thank you for your order!",
  "text": "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
};

export const products: Record<string, Product> = {
  item_1: {
    name: 'Sauce Labs Backpack',
    desc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: '$29.99',
  },
  item_2: {
    name: 'Sauce Labs Bike Light',
    desc: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
    price: '$9.99'
  }
};
  
export const customerInfo = {
  firstName: 'Nhu Nguyen',
  lastName: 'Automation',
  postalCode: '10000'
};

export const emailSamples = [
  "john@test.com",
  "invalid-email",
  "mary@example.org",
  "john@test.com",
  "JOHN@test.com",
  "hello@world",
  "qa_user@company.io"
];
