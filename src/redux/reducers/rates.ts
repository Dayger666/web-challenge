import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponse } from 'interfaces/api-interfaces';
import { IRates } from 'interfaces/transactions-interfaces';

export interface IRatesState{
  isLoading: boolean;
  eurRates: IRates,
  error: Error | string | null,
}

const initialState: IRatesState = {
  isLoading: false,
  eurRates: {
    BTC: null,
    CHF: null,
    USD: null,
  },
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    fetchRatesRequest(state) {
      state.isLoading = true;
    },
    fetchRatesSuccess(
      state,
      { payload: { data } }: PayloadAction<IResponse<IRates>>,
    ) {
      state.eurRates = data;
      state.isLoading = false;
    },
    fetchRatesFailed(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Actions
export const {
  fetchRatesRequest,
  fetchRatesSuccess,
  fetchRatesFailed,
} = actions;

// Reducer
export default reducer;
