import { MenuProps, Menu, Image, ConfigProvider, Button } from 'antd';
import React from 'react'
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    LaptopOutlined,
    LineChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
    getItem('Dashboard', '/auth/dashboard', <PieChartOutlined />),
    getItem('Thiết bị', '/auth/device/list-device', <DesktopOutlined />),
    getItem('Dịch vụ', '/auth/service/list-service', <UserOutlined />,),
    getItem('Cấp số', '/auth/numbering/list-numbering', <LaptopOutlined />),
    getItem('Báo cáo', '/auth/report', <LineChartOutlined />),
    getItem('Cài đặt hệ thống', 'sub1', <SettingOutlined />, [
        getItem('Quản lý vai trò', '6'),
        getItem('Quản lý tài khoản', '7'),
        getItem('Nhật ký người dùng', '8')]),
];
const SideMenu: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: '100vh', }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FF9138'
                    }
                }}>
                <div >
                    <div style={{ height: 100, margin: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Image src={require('../../assets/logowhite.png')} width={150} preview={false} />
                    </div>
                    <div style={{ height:'80vh',display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <Menu onClick={(item) => {
                                navigate(item.key);
                            }} theme="light" mode="vertical" items={items} defaultSelectedKeys={['/auth/dashboard']} />
                        </div>
                        <div>
                            <Button block type='primary' style={{ background: '#FFF2E7', color: '#FF7506' }} onClick={() => navigate('/login')}>Đăng xuất</Button>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div>
    )
}

export default SideMenu