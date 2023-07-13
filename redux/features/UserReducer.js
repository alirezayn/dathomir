const { createSlice } = require("@reduxjs/toolkit");
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';
const INITIAL_STATE = {
    token:'',
    profile:{}
}

const userSlice = createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload
            Cookies.set('token',state.token,{expires:1})
            state.profile = (jwtDecode(state.token))
        },
        removeToken:(state)=>{
            state.token = ""
            Cookies.set('token',state.token)
            state.profile = {}
        },
        addTokenFromLocalStorage:(state)=>{
            const token = Cookies.get('token')
            state.token = token
            state.profile = {}
            state.profile = (jwtDecode(state.token))
            
        }
    }
})

export const userReducer = userSlice.reducer

export const {setToken, removeToken, addTokenFromLocalStorage} = userSlice.actions