import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, actions){
        state.totalQuantity = actions.payload.items[0].totalQuantity;
        state.items = actions.payload.items[0].items;
    },
    addItemsTocart(state, action) {
      const newItem = action.payload;
      const itemIsExisting = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!itemIsExisting){
        console.log(itemIsExisting)
        state.totalQuantity = 1;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        itemIsExisting.quantity++;
        itemIsExisting.totalPrice += newItem.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});


export const cardActions = cartSlice.actions;
export default cartSlice;
