const { createSlice } = require("@reduxjs/toolkit");
import * as api from "api/api";
const dynamicSlice = createSlice({
  name: "route",
  initialState: [],
  reducers: {
    checkRoute: async (state) => {
      let request = await api.GET("products/categories");
      request = await request.data;
      state.push(request)
      // item = request.products.find(o=> o.name == action.payload.name)
  //       request.map(item=>{
  //           if(item){
  //             return state.push({dynamic:item.name})
  //           }
  //       })
    },
  },
});
export const dynamicReducer = dynamicSlice.reducer;

export const { checkRoute } = dynamicSlice.actions
