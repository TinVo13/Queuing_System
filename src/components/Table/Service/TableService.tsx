import React from 'react'
import { ServiceType } from '../../../type'
import { Badge, ConfigProvider, Space } from 'antd'
import { NavLink } from 'react-router-dom'
import Table, { ColumnsType } from 'antd/es/table'
import { DataService } from '../../../data'


const column: ColumnsType<ServiceType> = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'maDichVu',
        key: 'maDichVu',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tenDichVu',
        key: 'tenDichVu',
    },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'trangThaiHoatDong',
        key: 'trangThaiHoatDong',
        render: (_, record) => (
            <Space>
                {record.trangThaiHoatDong === 'Ngưng hoạt động' ? <Badge status="error" /> : <Badge status="success" />}
                {record.trangThaiHoatDong}
            </Space>
        )
    },
    {
        title: '',
        key: 'chitiet',
        render: () => (
            <Space>
                <NavLink to={'/auth/service/list-service/detail-service'}>Chi tiết</NavLink>
            </Space>
        )
    },
    {
        title: '',
        key: 'capnhat',
        render: () => (
            <Space>
                <NavLink to={'/auth/service/list-service/update-service'}>Cập nhật</NavLink>
            </Space>
        )
    },
]
const TableService: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF9138',
                    colorBorderSecondary: '#FFE3CD',
                }
            }}>
            <Table
                dataSource={DataService}
                columns={column}
                pagination={{ pageSize: 9 }}
                size='middle'
                bordered
                rowClassName={(record, index) => (index%2===0 ? 'table-row-light' :  'table-row-dark')}
            />
        </ConfigProvider>
    )
}

export default TableService