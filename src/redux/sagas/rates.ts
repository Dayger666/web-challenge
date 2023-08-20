import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { message } from 'antd';

import {
  fetchRatesFailed,
  fetchRatesRequest,
  fetchRatesSuccess,
} from 'redux/reducers/rates';
import { transactionsAPI } from 'utils/api';
import { IResponse } from 'interfaces/api-interfaces';
import { IRates } from 'interfaces/transactions-interfaces';

function* fetchRates() {
  try {
    const response: IResponse<IRates> = yield call(transactionsAPI.getEurRates);
    yield put(fetchRatesSuccess(response));
  } catch (error: any) {
    yield put(fetchRatesFailed(error));
    message.error(error.message);
  }
}

export default function* characterSaga() {
  yield takeEvery(fetchRatesRequest.type, fetchRates);
}
