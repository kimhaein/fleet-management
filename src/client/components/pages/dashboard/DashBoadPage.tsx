import React, {FC} from "react";
import MapTemplates from '../../templates/mapTemplates/MapTemplates';
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;

interface PropTypes {}

const DashBoardPage:FC<PropTypes> = () => {
  return (
    <Content
      style={{
        position: 'relative',
        margin: 16,
        padding: 24,
        width: '100%',
        height: '100%',
        background: '#fff',
        boxShadow: '3px 3px 10px #ccc'
      }}
    >
      <MapTemplates />
    </Content>
  )
}
export default DashBoardPage;
