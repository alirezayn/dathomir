const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push({
          id: action.quantity.id,
          name: action.payload.name,
          price: action.payload.price,
          priceWithDiscount: action.payload.priceWithDiscount,
          image: action.payload.imageIndexUrl,
          quantity: 1,
        });
      }
    },
  },
});
export const cartReducer = cartReducer.reducers;

export const { addToCart } = CartSlice.actions;
