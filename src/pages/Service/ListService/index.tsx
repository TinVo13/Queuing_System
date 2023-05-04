import React, { useState } from 'react'
import { Badge, Button, Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Table, Typography } from 'antd'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { DataService } from '../../../data';
import { ColumnTableService } from '../../../components/Table/ColumnTable';
import { ColumnsType } from 'antd/es/table';
import { ServiceType } from '../../../type';

const { Text } = Typography;
const { RangePicker } = DatePicker;
const ListService = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [searchSelection, setSearchSelection] = useState("tất cả");
    const ColumnTableService: ColumnsType<ServiceType> = [
        {
            title: 'Mã dịch vụ',
            dataIndex: 'maDichVu',
            key: 'maDichVu',
            filteredValue: [searchText],
            onFilter: (value: any, record) => {
                return String(record.maDichVu).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.tenDichVu).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.moTa).toLowerCase().includes(value.toLowerCase());
            }
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
            filteredValue: [searchSelection],
            onFilter: (value: any, record) => {
                return value.toLowerCase()==="tất cả"?(record.trangThaiHoatDong.toLowerCase().includes("hoạt động"))
                :(record.trangThaiHoatDong.toLowerCase()===value.toLowerCase());
            },
            render: (_, record) => (
                <Space>
                    {record.trangThaiHoatDong === 'Ngưng hoạt động' ? <Badge status="error" text={record.trangThaiHoatDong} /> : <Badge status="success" text={record.trangThaiHoatDong} />}
                </Space>
            ),
            
        },
        {
            title: '',
            key: 'chitiet',
            render: () => (
                <Space>
                    <NavLink to={'/service/list-service/detail-service'}>Chi tiết</NavLink>
                </Space>
            )
        },
        {
            title: '',
            key: 'capnhat',
            render: () => (
                <Space>
                    <NavLink to={'/service/list-service/update-service'}>Cập nhật</NavLink>
                </Space>
            )
        },
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF9138',
                    colorBorder: '#FFF2E7',
                    colorBorderSecondary: '#FFE3CD',
                }
            }}>
            <Layout style={{ margin: '0 16px', }}>
                <Space direction='vertical'>
                    <Row>
                        <Col span={24}>
                            <Text className='label-h1' strong>Quản lý dịch vụ</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <Row justify={'space-between'}>
                                <Space>
                                    <Space direction='vertical'>
                                        <Text strong>Trạng thái hoạt động</Text>
                                        <Select
                                            onSelect={(value) => {
                                                setSearchSelection(value);
                                            }}
                                            size='large'
                                            defaultValue='tất cả'
                                            style={{ width: '300px' }}
                                            options={[{
                                                value: 'tất cả',
                                                label: 'Tất cả'
                                            },
                                            {
                                                value: 'hoạt động',
                                                label: 'Hoạt động'
                                            },
                                            {
                                                value: 'ngưng hoạt động',
                                                label: 'Ngưng hoạt động'
                                            }]} />
                                    </Space>
                                    <Space direction='vertical'>
                                        <Text strong>Chọn thời gian</Text>
                                        <RangePicker
                                            size='large'
                                        />
                                    </Space>
                                </Space>
                                <Space direction='vertical'>
                                    <Text strong>Từ khóa</Text>
                                    <Input
                                        onChange={(e) => { setSearchText(e.target.value) }}
                                        size='large'
                                        type='text'
                                        placeholder='Nhập từ khóa'
                                        suffix={<SearchOutlined style={{ color: '#FF7506' }} />}
                                        style={{ width: '300px' }} />
                                </Space>
                            </Row>
                        </Col>
                        <Col span={2}>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={22}>
                            <Table
                                dataSource={DataService}
                                columns={ColumnTableService}
                                pagination={{ pageSize: 9 }}
                                size='middle'
                                bordered
                                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
                            />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94 }} onClick={() => navigate('/service/list-service/add-service')}>
                                        <Row justify={'center'}>
                                            <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                                            <Text style={{ whiteSpace: 'initial' }}>Thêm dịch vụ</Text>
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

export default ListService