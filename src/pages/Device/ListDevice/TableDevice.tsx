import React, { useState } from 'react'
import { DataType } from '../DataType';
import Table, { ColumnsType } from 'antd/es/table';
import { Badge, ConfigProvider, Space, Typography } from 'antd';
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';

const { Paragraph } = Typography;
const TableDevice: React.FC = () => {
    const navigate = useNavigate();
    const [ellipsis, setEllipsis] = useState(true);// eslint-disable-next-line
    const data: DataType[] = [
        {
            key: 1,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Ngưng hoạt động',
            trangthaiketnoi: 'Mất kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: 2,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Ngưng hoạt động',
            trangthaiketnoi: 'Mất kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: 3,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Hoạt động',
            trangthaiketnoi: 'Mất kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: 4,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Hoạt động',
            trangthaiketnoi: 'Kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: 5,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Ngưng hoạt động',
            trangthaiketnoi: 'Mất kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: 6,
            mathietbi: 'KIO_01',
            tenthietbi: 'Kiosk',
            diachiip: '192.168.0.10',
            trangthaihoatdong: 'Ngưng hoạt động',
            trangthaiketnoi: 'Mất kết nối',
            dichvusudung: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
    ];
    const column: ColumnsType<DataType> = [
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
                    {record.trangthaihoatdong==='Ngưng hoạt động' ?<Badge status="error" />:<Badge status="success" />}
                    {record.trangthaihoatdong}
                </Space>
            )
        },
        {
            title: 'Trạng thái kết nối',
            dataIndex: 'trangthaiketnoi',
            key: 'trangthaiketnoi',
            render:(_,record)=>(
                <Space>
                    {record.trangthaiketnoi==='Mất kết nối' ?<Badge status="error" />:<Badge status="success" />}
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
                    <NavLink to={'/device/list-device/detail-device'}>Chi tiết</NavLink>
                </Space>
            )
        },
        {
            title: '',
            key: 'capnhat',
            render: () => (
                <Space>
                    <NavLink to={'/device/list-device/update-device'}>Cập nhật</NavLink>
                </Space>
            )
        },
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary:'#FF9138',
                    colorBorderSecondary:'#FFE3CD',
                }
            }}>
            <Table
                dataSource={data}
                columns={column}
                pagination={{ pageSize: 5 }}
                size='small'
                bordered
            // rowClassName={(record, index) => (record.key%2==0 ? "red" : "green")}
            />
        </ConfigProvider>
    )
}

export default TableDevice