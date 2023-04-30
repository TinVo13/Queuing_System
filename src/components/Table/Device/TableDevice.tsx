import React, { useState } from 'react'
import { DeviceType } from '../../../type';
import Table, { ColumnsType } from 'antd/es/table';
import { Badge, ConfigProvider, Space, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { DataDevice } from '../../../data';

const { Paragraph } = Typography;
const TableDevice: React.FC = () => {
    const [ellipsis, setEllipsis] = useState(true);// eslint-disable-next-line

    const column: ColumnsType<DeviceType> = [
        {
            title: 'Mã thiết bị',
            dataIndex: 'mathietbi',
            key: 'mathietbi',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'tenthietbi',
            key: 'tenthietbi',
        },
        {
            title: 'Địa chỉ IP',
            dataIndex: 'diachiip',
            key: 'diachiip',
        },
        {
            title: 'Trạng thái hoạt động',
            dataIndex: 'trangthaihoatdong',
            key: 'trangthaihoatdong',
            render: (_, record) => (
                <Space>
                    {record.trangthaihoatdong === 'Ngưng hoạt động' ? <Badge status="error" /> : <Badge status="success" />}
                    {record.trangthaihoatdong}
                </Space>
            )
        },
        {
            title: 'Trạng thái kết nối',
            dataIndex: 'trangthaiketnoi',
            key: 'trangthaiketnoi',
            render: (_, record) => (
                <Space>
                    {record.trangthaiketnoi === 'Mất kết nối' ? <Badge status="error" /> : <Badge status="success" />}
                    {record.trangthaiketnoi}
                </Space>
            )
        },
        {
            title: 'Dịch vụ sử dụng',
            dataIndex: 'dichvusudung',
            key: 'dichvusudung',
            width: '20%',
            render: (_, record) => (
                <Space>
                    <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'Xem thêm' } : false}>
                        {record.dichvusudung}
                    </Paragraph>
                    {/* {record.dichvusudung} */}
                </Space>
            )
        },
        {
            title: '',
            key: 'chitiet',
            render: () => (
                <Space>
                    <NavLink to={'/auth/device/list-device/detail-device'}>Chi tiết</NavLink>
                </Space>
            )
        },
        {
            title: '',
            key: 'capnhat',
            render: () => (
                <Space>
                    <NavLink to={'/auth/device/list-device/update-device'}>Cập nhật</NavLink>
                </Space>
            )
        },
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF9138',
                    colorBorderSecondary: '#FFE3CD',
                }
            }}>
            <Table
                dataSource={DataDevice}
                columns={column}
                pagination={{ pageSize: 5 }}
                size='middle'
                rowClassName={(record, index) => (index%2===0 ? 'table-row-light' :  'table-row-dark')}
                bordered
            />
        </ConfigProvider>
    )
}

export default TableDevice