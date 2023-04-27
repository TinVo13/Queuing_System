import React from 'react'
import { Badge, Button, Card, Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Typography } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { SearchOutlined, EditOutlined, RollbackOutlined } from '@ant-design/icons'
import { DetailServiceType } from '../../../type'
import { DataDetailService } from '../../../data'
import { useNavigate } from 'react-router-dom'

const { Text, Title } = Typography
const { RangePicker } = DatePicker

const column: ColumnsType<DetailServiceType> = [
    {
        key: 'soThuTu',
        title: 'Số thứ tự',
        dataIndex: 'soThuTu'
    },
    {
        key: 'trangThai',
        title: 'Trạng thái',
        dataIndex: 'trangThai',
        render:(_,record)=>(
            <Space>
                {record.trangThai==='Đã hoàn thành'&& <Badge status='success' text={record.trangThai}/>}
                {record.trangThai==='Đang thực hiện' && <Badge status='processing' text={record.trangThai}/>}
                {record.trangThai==='Vắng' && <Badge status='default' text={record.trangThai}/>}
            </Space>
        )
    }
]
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
    return (
        <ConfigProvider
            theme={{
                token:{
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
                                        <Text>201</Text>
                                    </Space>
                                    <Space>
                                        <Text strong>Tên dịch vụ:</Text>
                                        <Text>Khám tim mạch</Text>
                                    </Space>
                                    <Space>
                                        <Text strong>Mô tả:</Text>
                                        <Text>Chuyên các bệnh lý về tim</Text>
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
                                                    size='large'
                                                    style={{ width: 160 }}
                                                    defaultValue={'tất cả'}
                                                    options={[
                                                        { label: 'Tất cả', value: 'tất cả' },
                                                        { label: 'Đã hoàn thành', value: 'đã hoàn thành' },
                                                        { label: 'Đang thực hiện', value: 'đã thực hiện' },
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
                                                <Input size='large' suffix={<SearchOutlined />} placeholder='Nhập từ khóa' />
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
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 100 }} onClick={() => navigate('/auth/service/list-service/update-service')} type='ghost'>
                                        <Row justify={'center'}>
                                            <EditOutlined style={style} />
                                            <Text style={{ whiteSpace: 'initial', color: '#FF7506' }}>Cập nhật danh sách</Text>
                                        </Row>
                                    </Button>
                                </Row>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94, width: 100 }} onClick={() => navigate('/auth/service/list-service')} type='ghost'>
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