import React, {
  lazy,
  Suspense,
} from 'react';

import Loading from 'components/Loader';
import { ROUTES } from 'utils/routes';

const loadable = (importStatement: () => Promise<{default: React.ComponentType<any>}>) => {
  const LazyComponent = lazy(importStatement);

  return () => (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export const publicRoutes = [
  {
    path: ROUTES.HOME.path,
    Element: loadable(() => import('containers/Homepage')),
  },
];
