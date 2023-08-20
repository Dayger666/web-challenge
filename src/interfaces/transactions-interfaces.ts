export enum CurrencyCode {
  BTC = 'BTC',
  CHF = 'CHF',
  USD = 'USD',
}

export type IRates = {
  [key in CurrencyCode]: number | null;
};

enum TransactionType {
  Withdrawal = 'withdrawal',
  Deposit = 'deposit',
}

enum TransactionStatus {
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
