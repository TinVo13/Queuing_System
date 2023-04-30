import { Button, Col, ConfigProvider, Input, Layout, Row, Select, Space, Typography } from 'antd'
import React from 'react'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons'
import TableDevice from '../../../components/Table/Device/TableDevice';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const ListDevice: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF9138',
                    colorBorder: '#FFF2E7'
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
                                    <Input size='large' type='text' placeholder='Nhập từ khóa' suffix={<SearchOutlined style={{ color: '#FF7506' }} />} style={{ width: '300px' }} />
                                </Space>
                            </Row>
                        </Col>
                        <Col span={2}>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={22}>
                            <TableDevice />
                        </Col>
                        <Col span={2}>
                            <Layout>
                                <Row justify={'end'} align={'middle'}>
                                    <Button style={{ background: '#FFF2E7', height: 94 }} onClick={() => navigate('/auth/device/list-device/add-device')}>
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