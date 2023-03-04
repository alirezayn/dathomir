const {
  configureStore,
  combineReducers,
  applyMiddleware,
  getDefaultMiddleware,
} = require("@reduxjs/toolkit");
const { cartReducer } = require("../reducer/StoreReducer");
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "thunk";
import logger from "redux-logger";
import { hydrate } from "react-dom";


const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  version:1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore(
  {
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      }
    })
  },
 composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(Store);
