import { all } from 'redux-saga/effects';

import transactionsSaga from './transactions';
import ratesSaga from './rates';

export default function* rootSaga() {
  yield all([
    transactionsSaga(),
    ratesSaga(),
  ]);
}
