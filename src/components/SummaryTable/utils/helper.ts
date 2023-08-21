import { Decimal } from 'decimal.js';

import {
  IRates,
  ITransaction,
  TransactionType,
  TransactionStatus,
} from 'interfaces/transactions-interfaces';
import { NA_VALUE } from 'utils/constants';

export interface ICurrencySummary {
  currency: string,
  totalCompletedWithdrawals: number;
  totalCompletedDeposits: number;
  totalPendingWithdrawals: number;
  totalPendingDeposits: number;
  totalBalance: number;
  totalBalanceEurEquiv: number | string;
}

const initCurrency = (): Omit<ICurrencySummary, 'currency'> => ({
  totalCompletedWithdrawals: 0,
  totalCompletedDeposits: 0,
  totalPendingWithdrawals: 0,
  totalPendingDeposits: 0,
  totalBalance: 0,
  totalBalanceEurEquiv: NA_VALUE,
});

const handleTransaction = (summary: ReturnType<typeof initCurrency>, transaction: ITransaction, rate: number | null) => {
  const { amount, type, status } = transaction;

  if (type === TransactionType.Withdrawal) {
    if (status === TransactionStatus.Completed) {
      summary.totalCompletedWithdrawals += amount;
      summary.totalBalance = new Decimal(summary.totalBalance).minus(amount).toNumber();
    } else {
      summary.totalPendingWithdrawals += amount;
    }
  } else if (type === TransactionType.Deposit) {
    if (status === TransactionStatus.Completed) {
      summary.totalCompletedDeposits += amount;
      summary.totalBalance += amount;
    } else {
      summary.totalPendingDeposits += amount;
    }
  }

  summary.totalBalanceEurEquiv = rate ? new Decimal(summary.totalBalance).times(rate).toNumber() : NA_VALUE;
};

export const computeCurrencySummary = (transactions: ITransaction[], rates: IRates) => {
  const currencyMap: Record<string, Omit<ICurrencySummary, 'currency'>> = {};

  transactions.forEach(transaction => {
    const currency = transaction.currency;

    if (!currencyMap[currency]) {
      currencyMap[currency] = initCurrency();
    }

    handleTransaction(currencyMap[currency], transaction, rates[currency]);
  });

  return Object.entries(currencyMap).map(([currency, data]) => ({
    currency,
    ...data,
  }));
};
