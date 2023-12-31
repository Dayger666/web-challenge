import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponse } from 'interfaces/api-interfaces';
import {
  ITransaction,
  IRates,
  ITransactions,
} from 'interfaces/transactions-interfaces';

export interface ITransactionsState{
  isLoading: boolean;
  list: ITransaction[];
  rates: Partial<IRates>,
  error: Error | string | null,
}

const initialState: ITransactionsState = {
  isLoading: false,
  list: [],
  rates: {},
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    fetchTransactionsListRequest(state) {
      state.isLoading = true;
    },
    fetchTransactionsListSuccess(
      state,
      { payload: { data: { transactions } } }: PayloadAction<IResponse<ITransactions>>,
    ) {
      state.list = transactions;
      state.isLoading = false;
    },
    fetchTransactionsListFailed(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Actions
export const {
  fetchTransactionsListRequest,
  fetchTransactionsListSuccess,
  fetchTransactionsListFailed,
} = actions;

// Reducer
export default reducer;
