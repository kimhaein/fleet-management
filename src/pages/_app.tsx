import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
const SideBar = Layout.Sider;
import { DashboardOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import styled from 'styled-components';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <SideBar trigger={null} collapsible collapsed={true}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
        </Menu>
      </SideBar>
      <Layout>
        <BaseContainer>
          <Component {...pageProps} />
        </BaseContainer>
      </Layout>
    </Layout>
  );
};

export default MyApp;

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
