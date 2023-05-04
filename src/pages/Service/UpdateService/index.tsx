import React from 'react'
import { Button, Card, Checkbox, Col, ConfigProvider, Form, Input, Layout, Row, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';
import { UpdateServiceType } from '../../../type';

const {Text} = Typography;
const {TextArea} = Input;

const initialValue:UpdateServiceType = {
    maDichVu: '201',
    tenDichVu: 'Khám tim mạch'
} 
const UpdateService = () => {
    const navigate = useNavigate();
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF7506'
                }
            }}>
            <Layout style={{ margin: '0 16px' }}>
                <Space direction='vertical'>
                    <Row>
                        <Col span={24}>
                            <Text className='label-h1' strong>Danh sách thiết bị</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form onFinish={()=>navigate('/service/list-service')} initialValues={initialValue}>
                                <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                                    <Card>
                                        <Space direction='vertical' style={{ width: '100%' }}>
                                            <Row>
                                                <Text strong className='label-h2'>Thông tin dịch vụ</Text>
                                            </Row>
                                            <Row gutter={24}>
                                                <Col span={12}>
                                                    <Space direction='vertical' style={{ width: '100%' }}>
                                                        <div>
                                                            <Text strong>Mã dịch vụ:</Text><Text type='danger'>*</Text>
                                                        </div>
                                                        <Form.Item
                                                            name={'maDichVu'}
                                                            rules={[{
                                                                required: true,
                                                                message: 'Vui lòng nhập mã dịch vụ!'
                                                            }]}>
                                                            <Input type='text' placeholder='Nhập mã dịch vụ' size='large'/>
                                                        </Form.Item>
                                                    </Space>
                                                    <Space direction='vertical' size={'small'} style={{ width: '100%' }}>
                                                        <div>
                                                            <Text strong>Tên dịch vụ:</Text><Text type='danger'>*</Text>
                                                        </div>
                                                        <Form.Item
                                                            name={'tenDichVu'}
                                                            rules={[{
                                                                required: true,
                                                                message: 'Vui lòng nhập tên dịch vụ!'
                                                            }]}>
                                                            <Input type='text' placeholder='Nhập tên dịch vụ' size='large' />
                                                        </Form.Item>
                                                    </Space>
                                                </Col>
                                                <Col span={12}>
                                                    <Space direction='vertical' style={{ width: '100%' }}>
                                                        <div>
                                                            <Text strong>Mô tả:</Text>
                                                        </div>
                                                        <TextArea autoSize={{ minRows: 5 }} placeholder='Mô tả dịch vụ' />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Text style={{color:'#FF7506'}} strong>Quy tắt cấp số</Text>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col>
                                                    <Checkbox />
                                                </Col>
                                                <Col span={3}>
                                                    <Text strong>Tăng tự động từ:</Text>
                                                </Col>
                                                <Col>
                                                    <Input placeholder='0001' style={{ width: 60 }} defaultValue={'0001'}/>
                                                </Col>
                                                <Col>
                                                    <Text>đến</Text>
                                                </Col>
                                                <Col>
                                                    <Input placeholder='9999' style={{ width: 60 }} defaultValue={'9999'}/>
                                                </Col>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col>
                                                    <Checkbox />
                                                </Col>
                                                <Col span={3}>
                                                    <Text strong>Prefix:</Text>
                                                </Col>
                                                <Col>
                                                    <Input placeholder='0001' style={{ width: 60 }} defaultValue={'0001'}/>
                                                </Col>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col>
                                                    <Checkbox />
                                                </Col>
                                                <Col span={3}>
                                                    <Text strong>Surfix:</Text>
                                                </Col>
                                                <Col>
                                                    <Input placeholder='0001' style={{ width: 60 }} defaultValue={'0001'}/>
                                                </Col>
                                            </Row>
                                            <Row gutter={10}>
                                                <Col>
                                                    <Checkbox />
                                                </Col>
                                                <Col span={3}>
                                                    <Text strong>Reset mỗi ngày</Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Text type='danger'>*</Text>
                                                <Text type='secondary'>Là trường thông tin bắt buộc</Text>
                                            </Row>
                                        </Space>
                                    </Card>
                                    <Row justify={'center'} align={'middle'}>
                                        <Space>
                                            <Form.Item>
                                                <Button className='btn-cancel' onClick={()=>navigate('/service/list-service')}>Hủy bỏ</Button>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button htmlType='submit' className='btn-submit' type='ghost'>Cập nhật</Button>
                                            </Form.Item>
                                        </Space>
                                    </Row>
                                </Space>
                            </Form>
                        </Col>
                    </Row>
                </Space>
            </Layout>
        </ConfigProvider>
    )
}

export default UpdateService