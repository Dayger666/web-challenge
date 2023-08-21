import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { message } from 'antd';

import {
  fetchTransactionsListFailed,
  fetchTransactionsListRequest,
  fetchTransactionsListSuccess,
} from 'redux/reducers/transactions';
import { transactionsAPI } from 'utils/api';
import { IResponse } from 'interfaces/api-interfaces';
import { ITransactions } from 'interfaces/transactions-interfaces';

function* fetchTransactions() {
  try {
    const response: IResponse<ITransactions> = yield call(transactionsAPI.getAll);
    yield put(fetchTransactionsListSuccess(response));
  } catch (error: any) {
    yield put(fetchTransactionsListFailed(error));
    message.error(error.message);
  }
}

export default function* characterSaga() {
  yield takeEvery(fetchTransactionsListRequest.type, fetchTransactions);
}
