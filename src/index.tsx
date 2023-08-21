import React from 'react';
import { createRoot } from 'react-dom/client';

import 'styles/index.scss';
import store from 'redux/store';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
);
