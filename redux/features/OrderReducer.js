const { createSlice } = require("@reduxjs/toolkit");
const INITIAL_STATE = {
  order:{},
  products:{}
}
const orderSlice = createSlice({
  name: "order",
  initialState: INITIAL_STATE,
  reducers: {
    submitOrder: (state,actions) => {
        state.order = {
          name:actions.payload.name,
          address:actions.payload.address,
          zipCode:actions.payload.zipCode,
          phone:actions.payload.phone,
          price:actions.payload.price,
          discount:actions.payload.discount,
          totalPrice:actions.payload.total,
        }
    },
    submitProducts:(state,actions)=>{
      state.products = (actions.payload)
      localStorage.setItem('orders',JSON.stringify(state))
    },
    addOrderFromLocalStorage:(state)=>{
      if(Object.keys(state.order).length == 0){
          const item = JSON.parse(localStorage.getItem('orders'));
          state.order = item.order;
          state.products = item.products;
        }
    },
    submitShippingTime:(state,actions)=>{
      state.order = {...state.order,date:actions.payload}
    },
    removeOrder:(state)=>{
      state.order = {};
      state.products = {};
      localStorage.setItem('orders',JSON.stringify(state))
    }
  },
  
});
export const orderReducer = orderSlice.reducer;

export const { submitOrder, submitProducts, submitShippingTime,removeOrder,addOrderFromLocalStorage } = orderSlice.actions
