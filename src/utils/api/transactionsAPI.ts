import { IListResponse } from 'interfaces/api-interfaces';
import { IRates, ITransaction } from 'interfaces/transactions-interfaces';
import { API_ROUTES } from 'utils/apiRoutes';

import axiosClient from './axiosClient';

const transactionsAPI = {
  getAll(): Promise<IListResponse<ITransaction[]>> {
    const url = API_ROUTES.TRANSACTIONS.path;
    const client = axiosClient.getClient();

    return client.get(url);
  },

  getEurRates(): Promise<IListResponse<IRates>> {
    const url = API_ROUTES.EUR_RATES.path;
    const client = axiosClient.getClient();

    return client.get(url);
  },
};

export default transactionsAPI;
