  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    items: [],
    totalQuantity: 0,
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItemToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ ...newItem, quantity: 1 });
        }

        state.totalQuantity++;
      },
      removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);

        if (existingItem) {
          state.totalQuantity--;
          if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id);
          } else {
            existingItem.quantity--;
          }
        }
      },
      clearCart(state) {
        state.items = [];
        state.totalQuantity = 0;
      },
    },
  });

  export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
