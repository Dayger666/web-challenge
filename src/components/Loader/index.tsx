import React, { FC, useEffect } from 'react';
import { Spin } from 'antd';
import {
  configure,
  start,
  done,
} from 'nprogress';
import 'nprogress/nprogress.css';

configure({ showSpinner: false });

const Loader: FC = () => {
  useEffect(() => {
    start();

    return () => {
      done();
    };
  }, []);

  return (
    <div>
      <Spin />
    </div>
  );
};

export default Loader;
