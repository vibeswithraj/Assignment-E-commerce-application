import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
