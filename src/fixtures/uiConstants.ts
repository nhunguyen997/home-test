export const inventory_sort = {
  NAME_ASC: 'Name (A to Z)',
  NAME_DESC: 'Name (Z to A)',
  PRICE_ASC: 'Price (low to high)',
  PRICE_DESC: 'Price (high to low)',
} as const;
export type InventorySortType = typeof inventory_sort[keyof typeof inventory_sort];

export const list_url = {
    LOGIN: '/',
    INVENTORY: '/inventory.html',
    CART: '/cart.html',
    CHECKOUT_STEP_ONE: '/checkout-step-one.html',
    CHECKOUT_STEP_TWO: '/checkout-step-two.html',
    CHECKOUT_COMPLETE: '/checkout-complete.html'
};  


