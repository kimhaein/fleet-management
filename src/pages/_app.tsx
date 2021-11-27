import { FC } from "react";
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const MyApp:FC<any> = ({ Component, pageProps }) =>{
  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={true}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
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
        <Content
          style={{
            margin: 16,
            padding: 24,
            minHeight: 280,
            background: '#fff',
            boxShadow: '3px 3px 10px #ccc'
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyApp;