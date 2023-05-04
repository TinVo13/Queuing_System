import React, { useState } from 'react'
import { Badge, Button, Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Table, Typography } from 'antd'
import { SearchOutlined, ArrowRightOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { NumberingType } from '../../../type'
import { ColumnsType } from 'antd/es/table'
import { DataListNumbeing } from '../../../data'
import { NavLink, useNavigate } from 'react-router-dom'
import { SelectionService } from '../../../components/Selection/ItemSelection'



const { Text } = Typography
const ListNumbering: React.FC = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const column: ColumnsType<NumberingType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            filteredValue: [searchText],
            onFilter: (value: any, record) => {
                return String(record.stt).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.tenDichVu).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.tenKhachHang).toLowerCase().includes(value.toLowerCase());
            }
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
                    {record.trangThai === 'Đang chờ' && <Badge status='processing' text={record.trangThai} />}
                    {record.trangThai === 'Bỏ qua' && <Badge status='error' text={record.trangThai} />}
                    {record.trangThai === 'Đã sử dụng' && <Badge status='default' text={record.trangThai} />}
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
    return (
        <ConfigProvider
            theme={{
                inherit: false,
                token: {
                    colorPrimary: '#FF7506',
                    colorBorderSecondary: '#FFE3CD',
                    colorBorder: '#FFF2E7'
                },
                components: {
                    Badge: {
                        colorPrimary: 'blue',
                    }
                }
            }}>
            <Layout>
                <Space direction='vertical'>
                    <Row>
                        <Col span={22} style={{ paddingLeft: 16 }}>
                            <Text className='label-h1' strong>Quản lý cấp số</Text>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={22} style={{ paddingLeft: 16 }}>
                            <Row justify={'space-between'}>
                                <Space direction='vertical'>
                                    <Text strong>Tên dịch vụ</Text>
                                    <Select
                                        size='large'
                                        options={SelectionService}
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
                                    <Input 
                                    onChange={(e)=>{setSearchText(e.target.value)}}
                                    size='large' 
                                    type='text' 
                                    placeholder='Nhập từ khóa' 
                                    suffix={<SearchOutlined style={{ color: '#FF7506' }} />} 
                                    style={{ width: '300px' }} />
                                </Space>
                            </Row>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row >
                        <Col span={22} style={{ paddingLeft: 16 }}>
                            <Table
                                dataSource={DataListNumbeing}
                                columns={column}
                                pagination={{ pageSize: 9 }}
                                bordered
                                tableLayout='auto'
                                size='middle'
                                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')} />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 80 }} onClick={() => navigate('/numbering/list-numbering/add-numbering')}>
                                        <Row justify={'center'}>
                                            <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                                            <Text style={{ whiteSpace: 'initial' }}>Thêm số mới</Text>
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