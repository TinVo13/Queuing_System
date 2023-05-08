import React from 'react'
import { Badge, Button, Card, Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Typography } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { SearchOutlined, EditOutlined, RollbackOutlined } from '@ant-design/icons'
import { DetailServiceType, ServiceType } from '../../../type/types'
import { DataDetailService } from '../../../data'
import { useNavigate, useParams } from 'react-router-dom'
import { getServiceByID } from '../../../firebase/controller'

const { Text, Title } = Typography
const { RangePicker } = DatePicker

const style: React.CSSProperties = {
    backgroundColor: '#FF7506',
    width: 23,
    height: 23,
    color: '#FFF2E7',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center'
}

const DetailService = () => {
    const navigate = useNavigate();
    const { key } = useParams();
    const [service, setService] = React.useState<ServiceType>();
    const [searchText, setSearchText] = React.useState<string>("");
    const [option, setOption] = React.useState<string>("tất cả");

    React.useEffect(() => {
        const getService = async () => {
            setService(await getServiceByID(String(key)));
        }
        getService();
    }, [])
    const handleTextChange = (value: string) => {
        setSearchText(value);
    }
    const column: ColumnsType<DetailServiceType> = [
        {
            key: 'soThuTu',
            title: 'Số thứ tự',
            dataIndex: 'soThuTu',
            filteredValue: [searchText],
            onFilter: (value: any, record) => {
                return String(record.soThuTu).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            key: 'trangThaiHoatDong',
            title: 'Trạng thái',
            dataIndex: 'trangThaiHoatDong',
            render: (_, record) => (
                <Space>
                    {record.trangThaiHoatDong === 'Đã hoàn thành' && <Badge status='success' text={record.trangThaiHoatDong} />}
                    {record.trangThaiHoatDong === 'Đang thực hiện' && <Badge status='processing' text={record.trangThaiHoatDong} />}
                    {record.trangThaiHoatDong === 'Vắng' && <Badge status='default' text={record.trangThaiHoatDong} />}
                </Space>
            ),
            filteredValue: [option],
            onFilter: (value: any, record) => {
                return (
                    value.toLowerCase() === "tất cả" && record.trangThaiHoatDong.toLowerCase().includes("")||
                    value.toLowerCase() === "đã hoàn thành" && record.trangThaiHoatDong.toLowerCase().includes("đã hoàn thành")||
                    value.toLowerCase() === "đang thực hiện" && record.trangThaiHoatDong.toLowerCase().includes("đang thực hiện")||
                    value.toLowerCase() === "vắng" && record.trangThaiHoatDong.toLowerCase().includes("vắng")
                )
            }
        }
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF7506'
                }
            }}>
            <Layout>
                <Space direction='vertical' style={{ width: '100%' }}>
                    <Row style={{ margin: '0 10px' }}>
                        <Title level={2} style={{ color: '#FF7506' }}>Quản lý dịch vụ</Title>
                    </Row>
                    <Row justify={'space-evenly'}>
                        <Col span={7}>
                            <Card style={{ height: '75vh' }}>
                                <Space direction='vertical' style={{ width: '100%' }}>
                                    <Text strong style={{ color: '#FF7506', fontSize: 20 }}>Thông tin dịch vụ</Text>
                                    <Space>
                                        <Text strong>Mã dịch vụ:</Text>
                                        <Text>{service?.maDichVu}</Text>
                                    </Space>
                                    <Space>
                                        <Text strong>Tên dịch vụ:</Text>
                                        <Text>{service?.tenDichVu}</Text>
                                    </Space>
                                    <Space>
                                        <Text strong>Mô tả:</Text>
                                        <Text>{service?.moTa}</Text>
                                    </Space>
                                    <Text strong style={{ color: '#FF7506', fontSize: 20 }}>Quy tắc cấp số</Text>
                                    <Row gutter={24}>
                                        <Col span={8}>
                                            <Text strong>Tăng tự động:</Text>
                                        </Col>
                                        <Col>
                                            <Input placeholder='0001' style={{ width: 60 }} />
                                        </Col>
                                        <Col>
                                            <Text>đến</Text>
                                        </Col>
                                        <Col>
                                            <Input placeholder='9999' style={{ width: 60 }} />
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col span={8}>
                                            <Text strong>Prefix:</Text>
                                        </Col>
                                        <Col>
                                            <Input placeholder='0001' style={{ width: 60 }} />
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col span={24}>
                                            <Text strong>Reset mỗi ngày</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text>Ví dụ: 201-2001</Text>
                                        </Col>
                                    </Row>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={14}>
                            <Card style={{ height: '75vh' }}>
                                <Space direction='vertical'>
                                    <Row gutter={24}>
                                        <Col span={6}>
                                            <Space direction='vertical'>
                                                <Text strong>Trạng thái</Text>
                                                <Select
                                                    onSelect={(value:string) => { setOption(value) }}
                                                    size='large'
                                                    style={{ width: 160 }}
                                                    defaultValue='tất cả'
                                                    options={[
                                                        { label: 'Tất cả', value: 'tất cả' },
                                                        { label: 'Đã hoàn thành', value: 'đã hoàn thành' },
                                                        { label: 'Đang thực hiện', value: 'đang thực hiện' },
                                                        { label: 'Vắng', value: 'vắng' }]} />
                                            </Space>
                                        </Col>
                                        <Col span={10}>
                                            <Space direction='vertical'>
                                                <Text strong>Chọn thời gian</Text>
                                                <RangePicker
                                                    size='large'
                                                    format={'DD/MM/YYYY'}
                                                />
                                            </Space>
                                        </Col>
                                        <Col span={8}>
                                            <Space direction='vertical'>
                                                <Text strong>Từ khóa</Text>
                                                <Input
                                                    size='large'
                                                    suffix={<SearchOutlined />}
                                                    placeholder='Nhập từ khóa'
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTextChange(e.target.value)} />
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Table
                                                size='small'
                                                pagination={{ pageSize: 8 }}
                                                dataSource={DataDetailService}
                                                columns={column} />
                                        </Col>
                                    </Row>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 100 }} onClick={() => navigate(`/service/list-service/update-service/${key}`)} type='ghost'>
                                        <Row justify={'center'}>
                                            <EditOutlined style={style} />
                                            <Text style={{ whiteSpace: 'initial', color: '#FF7506' }}>Cập nhật danh sách</Text>
                                        </Row>
                                    </Button>
                                </Row>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 100 }} onClick={() => navigate('/service/list-service')} type='ghost'>
                                        <Row justify={'center'}>
                                            <RollbackOutlined style={style} />
                                            <Text style={{ whiteSpace: 'initial', color: '#FF7506' }}>Quay lại</Text>
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

export default DetailService