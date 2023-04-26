import React from 'react'
import { Badge, Button, Checkbox, Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Table, Typography } from 'antd'
import { SearchOutlined, ArrowRightOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { NumberingType } from '../../../type'
import { ColumnsType } from 'antd/es/table'
import { DataListNumbeing } from '../../../data'
import { NavLink, useNavigate } from 'react-router-dom'


const column: ColumnsType<NumberingType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'tenKhachHang',
        key: 'tenKhachHang',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tenDichVu',
        key: 'tenDichVu',
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'thoiGianCap',
        key: 'thoiGianCap',
    },
    {
        title: 'Hạn sử dụng',
        dataIndex: 'hanSuDung',
        key: 'hanSuDung',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'trangThai',
        key: 'trangThai',
        render: (_, record) => (
            <Space>
                {record.trangThai === 'Đang chờ' && <Badge status='processing' text={record.trangThai}/>
                ||record.trangThai === 'Đã sử dụng' && <Badge status='default' text={record.trangThai}/>
                ||record.trangThai === 'Bỏ qua' && <Badge status='error' text={record.trangThai}/>}
            </Space>
        )
    },
    {
        title: 'Nguồn cấp',
        dataIndex: 'nguonCap',
        key: 'nguonCap'
    },
    {
        title: '',
        render: (_, record) => (
            <NavLink to={'/numbering/list-numbering/detail-numbering'}>Chi tiết</NavLink>
        )
    }
]
const { Text } = Typography
const ListNumbering: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ConfigProvider
            theme={{
                inherit: false,
                token: {
                    colorPrimary: '#FF7506',
                    colorBorderSecondary: '#FFE3CD',
                },
                components:{
                    Badge:{
                        colorPrimary:'blue',
                    }
                }
            }}>
            <Layout style={{ margin: '16px', }}>
                <Space direction='vertical'>
                    <Row>
                        <Text style={{ color: '#FF7506', fontSize: 24 }} strong>Quản lý cấp số</Text>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <Row justify={'space-between'}>
                                <Space direction='vertical'>
                                    <Text strong>Tên dịch vụ</Text>
                                    <Select
                                        size='large'
                                        options={[
                                            { label: 'Tất cả', value: 'tất cả' },
                                            { label: 'Khám tim mạch', value: 'khám tim mạch' },
                                            { label: 'Khám sản - Phụ khoa', value: 'khám sản - phụ khoa' },
                                            { label: 'Khám răng hàm mặt', value: 'khám răng hàm mặt' },
                                            { label: 'Khám tai mũi họng', value: 'khám tai mũi họng' },
                                            { label: 'Khám hô hấp', value: 'khám hô hấp' },
                                            { label: 'Khám tổng quát', value: 'khám tổng quát' }]}
                                        defaultValue={'Tất cả'}
                                        style={{ width: 150 }} />
                                </Space>
                                <Space direction='vertical'>
                                    <Text strong>Tình trạng</Text>
                                    <Select
                                        size='large'
                                        options={[
                                            { label: 'Tất cả', value: 'tất cả' },
                                            { label: 'Đang chờ', value: 'đang chờ' },
                                            { label: 'Đang sử dụng', value: 'đang sử dụng' },
                                            { label: 'Bỏ qua', value: 'bỏ qua' }]}
                                        defaultValue={'Tất cả'}
                                        style={{ width: 150 }} />
                                </Space>
                                <Space direction='vertical'>
                                    <Text strong>Nguồn cấp</Text>
                                    <Select
                                        options={[
                                            { label: 'Tất cả', value: 'tất cả' },
                                            { label: 'Kiosk', value: 'kiosk' },
                                            { label: 'Hệ thống', value: 'hệ thống' }]}
                                        defaultValue={'Tất cả'}
                                        size='large'
                                        style={{ width: 150 }} />
                                </Space>
                                <Row justify={'center'} align={'middle'}>
                                    <Space direction='vertical'>
                                        <Text strong>Chọn thời gian</Text>
                                        <Space>
                                            <DatePicker size='large' style={{ width: 150 }} />
                                            <ArrowRightOutlined />
                                            <DatePicker size='large' style={{ width: 150 }} />
                                        </Space>
                                    </Space>
                                </Row>
                                <Space direction='vertical'>
                                    <Text strong>Từ khóa</Text>
                                    <Input size='large' type='text' placeholder='Nhập từ khóa' suffix={<SearchOutlined style={{ color: '#FF7506' }} />} style={{ width: '300px' }} />
                                </Space>
                            </Row>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={22}>
                            <Table
                                dataSource={DataListNumbeing}
                                columns={column}
                                pagination={{ pageSize: 9 }}
                                bordered
                                tableLayout='auto'
                                size='small'
                                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')} />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94 }} onClick={() => navigate('/numbering/list-numbering/add-numbering')} type='ghost'>
                                        <Row justify={'center'}>
                                            <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                                            <Text style={{ whiteSpace: 'initial' }}>Cấp số mới</Text>
                                        </Row>
                                    </Button>
                                </Row>
                            </Layout>
                        </Col>
                    </Row>
                </Space>
            </Layout>
        </ConfigProvider>
    )
}

export default ListNumbering