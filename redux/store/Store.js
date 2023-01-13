const {
  configureStore,
  combineReducers,
  applyMiddleware,
} = require("@reduxjs/toolkit");
const { cartReducer } = require("../reducer/StoreReducer");
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { Logger } from "logger";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore(
  {
    reducer: persistedReducer,
  },
  composeWithDevTools(applyMiddleware(Logger))
);

export const persistor = persistStore(Store);
