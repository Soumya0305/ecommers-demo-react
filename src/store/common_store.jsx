import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../actions/authSlice.jsx";
import cartReducer from "../actions/cartSlice.jsx";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    auth: authReducer,
    cart: cartReducer,
}));

export const ecomm_store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }),
})

export const persistor = persistStore(ecomm_store);
