import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, Product } from '@/types';

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.product.id !== action.payload.id,
          );
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartIsOpen = (state: { cart: CartState }) =>
  state.cart.isOpen;
export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => {
    const discountedPrice =
      item.product.price * (1 - item.product.discountPercentage / 100);
    return total + discountedPrice * item.quantity;
  }, 0);
export const selectIsInCart =
  (productId: number) => (state: { cart: CartState }) =>
    state.cart.items.some((item) => item.product.id === productId);
