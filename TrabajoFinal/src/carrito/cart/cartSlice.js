import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const uniqueId = `${action.payload._id}-${Date.now()}`;
      state.items.push({ ...action.payload, id: uniqueId, quantity: 1 });
      state.totalQuantity += 1;
    },
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.totalQuantity -= existingItem.quantity;
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
      } else if (existingItem) {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.totalQuantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
