import React from 'react'
import { Button, Card, Col, ConfigProvider, Form, Input, Layout, Row, Select, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';

const { Text } = Typography

const AddDevice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF7506'
        }
      }}>
      <Layout>
        <Space direction='vertical'>
          <Row justify={'space-evenly'}>
            <Col span={22}>
              <Text className='label-h1' strong>Quản lý thiết bị</Text>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Row justify={'space-evenly'}>
            <Col span={22}>
              <Form onFinish={() => navigate('/device/list-device')}>
                <Space direction='vertical' style={{ width: '100%' }} size={'large'}>
                  <Card>
                    <Text className='label-h2' strong>Thông tin thiết bị</Text>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Nhập mã thiết bị: </Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Mã thiết bị'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập mã thiết bị!'
                            }]}>
                            <Input type='text' placeholder='Nhập mã thiết bị' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tên thiết bị</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Tên thiết bị'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập tên thiết bị!'
                            }]}>
                            <Input type='text' placeholder='Nhập tên thiết bị' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Địa chỉ IP:</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Địa chỉ IP'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập địa chỉ IP!'
                            }]}>
                            <Input type='text' placeholder='Nhập địa chỉ IP' size='large' />
                          </Form.Item>
                        </Space>
                      </Col>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Loại thiết bị</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Loại thiết bị'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng chọn loại thiết bị!'
                            }]}>
                            <Select
                              options={[{ label: 'Kiosk', value: 'Kiosk' }, { label: 'Display counter', value: 'Display counter' }]}
                              placeholder='Chọn loại thiết bị'
                              size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tên đăng nhập:</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Tài khoản'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập tên đăng nhập!'
                            }]}>
                            <Input type='text' placeholder='Nhập tài khoản' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Mật khẩu</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Mật khẩu'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập mật khẩu!'
                            }]}>
                            <Input type='text' placeholder='Nhập mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={24}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Dịch vụ sử dụng:</Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'Dịch vụ'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập dịch vụ!'
                            }]}>
                            <Input type='text' placeholder='Nhập dịch vụ sử dụng' size='large' />
                          </Form.Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Text type='danger'>* </Text>
                        <Text>Là trường bắt buộc</Text>
                      </Col>
                    </Row>
                  </Card>
                  <Row justify={'center'} align={'middle'}>
                    <Space>
                      <Form.Item>
                        <Button className='btn-cancel' onClick={() => navigate('/device/list-device')}>Hủy bỏ</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button className='btn-submit' htmlType='submit'>Thêm thiết bị</Button>
                      </Form.Item>
                    </Space>
                  </Row>
                </Space>
              </Form>
            </Col>
            <Col span={1}></Col>
          </Row>
        </Space>
      </Layout>
    </ConfigProvider >
  )
}

export default AddDevice