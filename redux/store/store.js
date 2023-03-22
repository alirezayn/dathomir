const {
  configureStore,
  combineReducers,
  applyMiddleware,
  getDefaultMiddleware,
} = require("@reduxjs/toolkit");
const { cartReducer } = require("../reducer/StoreReducer");
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "thunk";
import { productReducer } from "../reducer/productReducer";


export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const persistConfig = {
  key: "store",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],

      }
    }),
  },
  composeWithDevTools(applyMiddleware(thunk))
);




export const persistor = persistStore(store);

