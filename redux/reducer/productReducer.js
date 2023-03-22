const { createSlice } = require("@reduxjs/toolkit");



const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        storeProducts:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const productReducer = productSlice.reducer

export const {storeProducts} = productSlice.actions