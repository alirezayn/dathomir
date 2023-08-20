const {
  configureStore,
  combineReducers,
} = require("@reduxjs/toolkit")
const { cartReducer } = require("../features/StoreReducer");
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {  userReducer } from "../features/UserReducer"
import { dynamicReducer, orderReducer } from "../features/OrderReducer";

// export const rootReducer = combineReducers({
//   cart: cartReducer,
//   product: productReducer,
// });

// const persistConfig = {
//   key: "store",
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    user:userReducer,
    order:orderReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   });
  // },
});
// export const persistor = persistStore(store)