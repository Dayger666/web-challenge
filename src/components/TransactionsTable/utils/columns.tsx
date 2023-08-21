import React from 'react';
import { ColumnsType } from 'antd/es/table';

import { IRates, ITransaction } from 'interfaces/transactions-interfaces';
import { NA_VALUE } from 'utils/constants';

const getEurEquivalent = (transaction: ITransaction, rates: IRates): number | string => {
  const rateForCurrency = rates[transaction.currency];

  return rateForCurrency ? rateForCurrency * transaction.amount : NA_VALUE;
};

export const getColumns = (rates: IRates): ColumnsType<ITransaction> => [
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Eur equivalent',
    dataIndex: 'eur_equiv',
    render: (_, transaction) => <div>{getEurEquivalent(transaction, rates)}</div>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];
