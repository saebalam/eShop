import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import errorSlice from "./errorSlice";

// Combine your reducers
const rootReducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
  error: errorSlice,
});

// Configure persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Configure persistor
export const persistor = persistStore(store);
