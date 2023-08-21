import React, { FC, useMemo } from 'react';
import { Table } from 'antd';

import { IRates, ITransaction } from 'interfaces/transactions-interfaces';

import { computeCurrencySummary } from './utils/helper';
import { columns } from './utils/columns';

interface ITransactionsTable {
  transactions: ITransaction[],
  rates: IRates,
  isLoading: boolean,
}

const SummaryTable: FC<ITransactionsTable> = ({
  transactions,
  rates,
  isLoading,
}) => {
  const data = useMemo(() => computeCurrencySummary(transactions, rates), [transactions, rates]);

  return <Table
    dataSource={data}
    columns={columns}
    rowKey="currency"
    loading={isLoading}
  />;
};

export default SummaryTable;
