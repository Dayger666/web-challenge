import React, {
  FC,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout,
  Typography,
  Space,
} from 'antd';

import { selectTransactionsIsLoading, selectTransactionsList } from 'redux/selectors/transactions-selectors';
import { selectRates, selectRatesIsLoading } from 'redux/selectors/rates-selector';
import { fetchTransactionsListRequest } from 'redux/reducers/transactions';
import { fetchRatesRequest } from 'redux/reducers/rates';
import TransactionsTable from 'components/TransactionsTable';
import SummaryTable from 'components/SummaryTable';

import styles from './styles.module.scss';

const { Content } = Layout;
const { Title } = Typography;

const Homepage: FC = () => {
  const dispatch = useDispatch();

  const isTransactionsLoading = useSelector(selectTransactionsIsLoading);
  const transactions = useSelector(selectTransactionsList);
  const isRatesLoading = useSelector(selectRatesIsLoading);
  const rates = useSelector(selectRates);

  const isLoading = isRatesLoading || isTransactionsLoading;

  useEffect(() => {
    dispatch(fetchRatesRequest());
    dispatch(fetchTransactionsListRequest());
  }, []);

  return (
    <Content className={styles.container}>
      <Space direction="vertical" size="large">
        <Title>SwissBorg web challenge</Title>
        <TransactionsTable
          isLoading={isLoading}
          transactions={transactions}
          rates={rates}
        />
        <SummaryTable
          isLoading={isLoading}
          transactions={transactions}
          rates={rates}
        />
      </Space>
    </Content>
  );
};

export default Homepage;
