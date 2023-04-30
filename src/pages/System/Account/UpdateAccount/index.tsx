import { Button, Card, Col, ConfigProvider, Form, Input, Layout, Row, Select, Space, Typography } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SelectionRole, Status } from '../../../../components/Selection/ItemSelection';

const {Text} = Typography;
const UpdateAccount = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/auth/system-setting/list-account');
  }
  const handleUpdate = () => {
    navigate('/auth/system-setting/list-account');
  }
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
              <Text className='label-h1' strong>Quản lý tài khoản</Text>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Row justify={'space-evenly'}>
            <Col span={22}>
              <Form
                size='middle'
                onFinish={handleUpdate}
              >
                <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                  <Card>
                    <Row>
                      <Text className='label-h2' strong>Thông tin tài khoản</Text>
                    </Row>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Họ tên: </Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'hoTen'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập họ tên!'
                            }]}>
                            <Input type='text' placeholder='Nhập họ tên' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Số điện thoại: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'soDienThoai'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập số điện thoại!'
                            }]}>
                            <Input type='text' placeholder='Nhập số điện thoại' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Email: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'email'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập Email!'
                            }]}>
                            <Input type='text' placeholder='Nhập Email' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Vai trò: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'vaiTro'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập vai trò!'
                            }]}>
                            <Select 
                            size='large'
                            options={SelectionRole} 
                            defaultValue={'Tất cả'}/>
                          </Form.Item>
                        </Space>
                      </Col>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tên đăng nhập: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'tenDangNhap'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng điền tên đăng nhập!'
                            }]}>
                            <Input type='text' placeholder='Nhập tên đăng nhập' size='large'/>
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Mật khẩu: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'matKhau'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập mật khẩu!'
                            }]}>
                            <Input type='password' placeholder='Nhập mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Nhập lại mật khẩu: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'nhapLaiMatKhau'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập lại mật khẩu!'
                            }]}>
                            <Input type='password' placeholder='Nhập lại mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tình trạng: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'tinhTrang'}
                            rules={[{
                              required: true,
                              message: 'Vui lòng chọn tình trạng!'
                            }]}>
                            <Select 
                              options={Status}
                              size='large'
                              defaultValue={'Tất cả'}/>
                          </Form.Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Text style={{ color: 'red' }}>* </Text>
                        <Text>Là trường bắt buộc</Text>
                      </Col>
                    </Row>
                  </Card>
                  <Row justify={'center'} align={'middle'}>
                    <Space>
                      <Form.Item>
                        <Button className='btn-cancel' onClick={handleCancel}>Hủy bỏ</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType='submit' className='btn-submit' type='ghost'>Cập nhật</Button>
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
    </ConfigProvider>
  )
}

export default UpdateAccount;