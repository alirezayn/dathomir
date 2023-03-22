import { REHYDRATE } from "redux-persist";

const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          discount: action.payload.discount,
          quantity: 1,
        });
      },
    
    increase: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrease: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    deleteFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
    },
    addFromLocalStorage:(state,action)=>{
      state.push({cart:action.payload})
    }
  },
});



export const cartReducer = cartSlice.reducer;

export const { addToCart, increase, decrease, deleteFromCart, addFromLocalStorage } = cartSlice.actions;
