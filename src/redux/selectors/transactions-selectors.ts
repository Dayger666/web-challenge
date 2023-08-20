import { RootState } from 'redux/store';

export const selectTransactionsIsLoading = (state: RootState) => state.transactions.isLoading;
export const selectTransactionsList = (state: RootState) => state.transactions.list;
