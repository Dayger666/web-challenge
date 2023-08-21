import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';

import RoutesLayout from 'containers/Routes';
import MainLayout from 'HOC/MainLayout';

interface IApp {
  store: EnhancedStore
}

const App: FC<IApp> = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <RoutesLayout />
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
