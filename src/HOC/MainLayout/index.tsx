import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface IMainLayout {
  children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
  <Layout>
    <Content>
      {children}
    </Content>
  </Layout>
);

export default MainLayout;
