import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import transactionSlice from './transactionSlice';
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    transaction: transactionSlice.reducer,
  },
});
