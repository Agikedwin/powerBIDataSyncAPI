import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    name: '',
    price: 0,
    description: '',
    changed: false,
  },
  reducers: {
    addProduct(state, actions){
        console.log(state, " the state is " + actions);
        state.name = actions.payload.name;
        state.price = actions.payload.price;
        state.description = actions.payload.description;
        state.changed = true;
       
    },
    fetchProductData(state, actions) {
        console.log(state, " :::: fetchProductData::::  " + actions);
        state.data = actions.payload;
        }
  },
});


export const productActions = productSlice.actions;
export default productSlice;


