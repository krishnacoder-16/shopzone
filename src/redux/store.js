import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});

// Best Practice: Save updates in a store subscription to keep reducers pure
store.subscribe(() => {
  try {
    const cartState = store.getState().cart.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartState));
  } catch (err) {
    // Ignore write errors
  }
});
