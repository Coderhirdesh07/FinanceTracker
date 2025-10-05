import { createSlice } from '@reduxjs/toolkit';

const defaultTransaction = {
  id: '',
  amount: 0,
  date: '',
  type: '',
  description: '',
};

const initialTransactionsState = {
  loading: true,
  transactions: [defaultTransaction], // or [defaultTransaction] if you want a default entry
  error: null,
};

function handleGetTransaction(state, action) {
  ((state.loading = false),
    (state.transactions = [
      {
        id: action.payload.id,
        amount: action.payload.amount,
        type: action.payload.type,
        date: action.payload.date,
        description: action.payload.description,
      },
    ]));
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initialTransactionsState,
  reducers: {
    fetchdata: handleGetTransaction,
  },
});

export const { fetchdata } = transactionSlice.actions;
export default transactionSlice.reducer;
