import { ColumnsType } from 'antd/es/table';

import { ICurrencySummary } from './helper';

export const columns: ColumnsType<ICurrencySummary> = [
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Total completed withdrawals',
    dataIndex: 'totalCompletedWithdrawals',
    key: 'totalCompletedWithdrawals',
  },
  {
    title: 'Total completed deposits',
    dataIndex: 'totalCompletedDeposits',
    key: 'totalCompletedDeposits',
  },
  {
    title: 'Total pending withdrawals',
    dataIndex: 'totalPendingWithdrawals',
    key: 'totalPendingWithdrawals',
  },
  {
    title: 'Total pending deposits',
    dataIndex: 'totalPendingDeposits',
    key: 'totalPendingDeposits',
  },
  {
    title: 'Total balance',
    dataIndex: 'totalBalance',
    key: 'totalBalance',
  },
  {
    title: 'Total balance eur equivalent',
    dataIndex: 'totalBalanceEurEquiv',
    key: 'totalBalanceEurEquiv',
  },
];
