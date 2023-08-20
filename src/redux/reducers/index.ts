import { combineReducers } from '@reduxjs/toolkit';

import transactions from './transactions';
import rates from './rates';

const reducer = combineReducers({
  transactions,
  rates,
});

export default reducer;
