import { RootState } from 'redux/store';

export const selectRatesIsLoading = (state: RootState) => state.rates.isLoading;
export const selectRates = (state: RootState) => state.rates.eurRates;
