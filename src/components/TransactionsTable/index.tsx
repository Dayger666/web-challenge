import React, { FC } from 'react';
import { Table } from 'antd';

import { IRates, ITransaction } from 'interfaces/transactions-interfaces';

import { getColumns } from './utils/columns';

interface ITransactionsTable {
  transactions: ITransaction[],
  rates: IRates,
  isLoading: boolean,
}

const TransactionsTable: FC<ITransactionsTable> = ({
  transactions,
  rates,
  isLoading,
}) => {
  const columns = getColumns(rates);

  return <Table
    dataSource={transactions}
    columns={columns}
    rowKey="id"
    loading={isLoading}
  />;
};

export default TransactionsTable;
