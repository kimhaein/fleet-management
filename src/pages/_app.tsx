import { FC } from "react";
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;
import {
  DashboardOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';

const MyApp:FC<AppProps> = ({ Component, pageProps }:AppProps) =>{
  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={true}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Layout>
  )
}

export default MyApp;
