import { Badge, Button, Col, ConfigProvider, Input, Layout, Row, Select, Space, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { DeviceType } from '../../../type/types';
import { deviceCollection } from '../../../firebase/controller';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';

const { Text, Paragraph } = Typography;

const ListDevice: React.FC = () => {
    const navigate = useNavigate();
    const [ellipsis, setEllipsis] = useState(true);// eslint-disable-next-line
    const [searchText, setSearchText] = useState("");
    const [searchSelection, setSearchSelection] = useState("tất cả");
    const [connectSelection, setConnectSelection] = useState("tất cả");
    const [device, setDevice] = React.useState<DeviceType[]>([]);

    React.useEffect(() =>
        onSnapshot(deviceCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setDevice(
                snapshot.docs.map((doc) => {
                    return {
                        key: doc.id,
                        ...doc.data()
                    };
                })
            );
        })
        , []);
    const columns: ColumnsType<DeviceType> = [
        {
            title: 'Mã thiết bị',
            dataIndex: 'maThietBi',
            key: 'maThietBi',
            filteredValue: [searchText],
            onFilter: (value: any, record) => {
                return String(record.tenThietBi).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.maThietBi).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.diaChiIP).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.dichVuSuDung).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'tenThietBi',
            key: 'tenThietBi',
        },
        {
            title: 'Địa chỉ IP',
            dataIndex: 'diaChiIP',
            key: 'diaChiIP',
        },
        {
            title: 'Trạng thái hoạt động',
            dataIndex: 'trangThaiHoatDong',
            key: 'trangThaiHoatDong',
            filteredValue: [searchSelection],
            onFilter: (value: any, record) => {
                return value.toLowerCase() === "tất cả" ? (record.trangThaiHoatDong.includes(""))
                    : (record.trangThaiHoatDong?.toLowerCase() === value.toLowerCase());
            },
            render: (_, record) => (
                <Space>
                    {record.trangThaiHoatDong === 'Ngưng hoạt động' ? <Badge status="error" text={record.trangThaiHoatDong} /> : <Badge status="success" text={record.trangThaiHoatDong} />}
                </Space>
            )
        },
        {
            title: 'Trạng thái kết nối',
            dataIndex: 'trangThaiKetNoi',
            key: 'trangThaiKetNoi',
            filteredValue: [connectSelection],
            onFilter: (value: any, record) => {
                return value.toLowerCase() === "tất cả" ? (record.trangThaiKetNoi.includes(""))
                    : (record.trangThaiKetNoi.toLowerCase() === value.toLowerCase());
            },
            render: (_, record) => (
                <Space>
                    {record.trangThaiKetNoi === 'Mất kết nối' ? <Badge status="error" text={record.trangThaiKetNoi} /> : <Badge status="success" text={record.trangThaiKetNoi} />}
                </Space>
            )
        },
        {
            title: 'Dịch vụ sử dụng',
            dataIndex: 'dichVuSuDung',
            key: 'dichVuSuDung',
            width: '20%',
            render: (_, record) => (
                <Space>
                    <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'Xem thêm' } : false}>
                        {record.dichVuSuDung}
                    </Paragraph>
                </Space>
            )
        },
        {
            title: '',
            key: 'chitiet',
            render: (_, record) => (
                <Space>
                    <NavLink to={`/device/list-device/detail-device/${record.key}`}>Chi tiết</NavLink>
                </Space>
            )
        },
        {
            title: '',
            key: 'capnhat',
            render: (_, record) => (
                <Space>
                    <NavLink to={`/device/list-device/update-device/${record.key}`}>Cập nhật</NavLink>
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
                            <Text className='label-h1' strong>Danh sách thiết bị</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22}>
                            <Row justify={'space-between'}>
                                <Space direction='horizontal'>
                                    <Space direction='vertical'>
                                        <Text strong>Trạng thái hoạt động</Text>
                                        <Select
                                            onSelect={(value) => { setSearchSelection(value) }}
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
                                        <Text strong>Trạng thái kết nối</Text>
                                        <Select
                                            onSelect={(value) => { setConnectSelection(value) }}
                                            size='large'
                                            defaultValue='tất cả'
                                            style={{ width: '300px' }}
                                            options={[{
                                                value: 'tất cả',
                                                label: 'Tất cả'
                                            },
                                            {
                                                value: 'kết nối',
                                                label: 'Kết nối'
                                            },
                                            {
                                                value: 'Mất kết nối',
                                                label: 'Mất kết nối'
                                            }]} />
                                    </Space>
                                </Space>
                                <Space direction='vertical'>
                                    <Text strong>Từ khóa</Text>
                                    <Input
                                        onChange={(e) => {
                                            setSearchText(e.target.value);
                                        }}
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
                                dataSource={device}
                                columns={columns}
                                pagination={{ pageSize: 5 }}
                                size='middle'
                                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
                                bordered
                            />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94 }} onClick={() => navigate('/device/list-device/add-device')}>
                                        <Row justify={'center'}>
                                            <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                                            <Text style={{ whiteSpace: 'initial' }}>Thêm thiết bị</Text>
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

export default ListDevice