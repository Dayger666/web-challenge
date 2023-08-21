export enum CurrencyCode {
  BTC = 'BTC',
  CHF = 'CHF',
  USD = 'USD',
}

export type IRates = {
  [key in CurrencyCode]: number | null;
};

export enum TransactionType {
  Withdrawal = 'withdrawal',
  Deposit = 'deposit',
}

export enum TransactionStatus {
  Pending = 'pending',
  Completed = 'completed',
}

export interface ITransaction {
  id: string;
  timestamp: string;
  type: TransactionType;
  status: TransactionStatus;
  currency: CurrencyCode;
  amount: number;
}

export interface ITransactions {
  transactions: ITransaction[];
}
