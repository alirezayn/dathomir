const { createSlice } = require("@reduxjs/toolkit");
import * as api from "api/api";
const orderSlice = createSlice({
  name: "route",
  initialState: [],
  reducers: {
    checkRoute: (state,actions) => {
        state.push({
          name:actions.payload.name,
          zipCode:actions.payload.zipCode,
          address:actions.payload.address,
          phone:actions.payload.phone
        })
    },
  },
});
export const orderReducer = orderSlice.reducer;

export const { checkRoute } = orderSlice.actions
