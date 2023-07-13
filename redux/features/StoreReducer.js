const { createSlice } = require("@reduxjs/toolkit")
const INITIAL_STATE = {
  cart:[],
  totalCart:0,
  cartAmount:0,
}



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
          indexImageUrl: action.payload.indexImageUrl,
          offer:action.payload.incredibleOffers,
          stock:action.payload.stock,
          quantity: 1,
        });
        localStorage.setItem('cart', JSON.stringify(state))
      },
      
      increase: (state, action) => {
        const item = state.find((item) => item.id === action.payload.id);
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(state))
      },
      decrease: (state, action) => {
        const item = state.find((item) => item.id === action.payload.id);
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item.id === action.payload.id);
          state.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(state))
        } else {
          item.quantity--;
          localStorage.setItem('cart', JSON.stringify(state))
        }
      },
      deleteFromCart: (state, action) => {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(state))
    },
      removeCart :(state)=>{
        state.splice(0,state.length)
        localStorage.setItem('cart',JSON.stringify(state))
      },
      addFromLocalStorage:(state)=>{
        if(state.length == 0){
            const item = JSON.parse(localStorage.getItem('cart'))
            item.map(data=> state.push(data))
        }
      }
  },
});



export const cartReducer = cartSlice.reducer;

export const { addToCart, increase, decrease, deleteFromCart, addFromLocalStorage, removeCart } = cartSlice.actions;
