import React, { FC } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

import NotFound from 'components/NotFound';
import { publicRoutes } from 'config/routesMap';

const RoutesLayout: FC = () => (
  <Routes>
    {publicRoutes && publicRoutes.map(({ Element, path }) => (
      <Route
        element={<Element />}
        key={path}
        path={path}
      />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesLayout;
