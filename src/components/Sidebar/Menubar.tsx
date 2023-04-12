import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  LaptopOutlined,
  LineChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Image, MenuProps, } from 'antd';
import { Layout, Menu } from 'antd';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Thiết bị', '2', <DesktopOutlined />),
  getItem('Dịch vụ', '3', <UserOutlined />,),
  getItem('Cấp số', '4', <LaptopOutlined />),
  getItem('Báo cáo', '5', <LineChartOutlined />),
  getItem('Cài đặt hệ thống', 'sub1', <SettingOutlined />, [
    getItem('Quản lý vai trò', '6'),
    getItem('Quản lý tài khoản', '7'),
    getItem('Nhật ký người dùng', '8')]),
];
const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
        <div style={{ height: 100, margin: 16,display:'flex',justifyContent:'center',alignItems:'center' }} >
          <Image src={require('../../image/logowhite.png')} width={150} preview={false}/>
        </div>
        <Menu theme="light" mode="inline" items={items} />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#FFF2E7',
            },
          }}
        >
          <Button type='primary' style={{ color: '#FF7506', }} block>Đăng xuất</Button>
        </ConfigProvider>

      </Sider>
      <Layout className="site-layout">
        <div style={{padding:'16px'}}>
          <Topbar/>
        </div>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ minHeight: '100%', }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center',}}>VoTrungTin</Footer>
      </Layout>
    </Layout>
  );
}
export default Dashboard;