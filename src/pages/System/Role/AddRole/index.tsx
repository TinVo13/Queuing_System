import React from 'react'
import { Button, Card, Checkbox, Col, ConfigProvider, Form, Input, Layout, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';


const { Text } = Typography;
const AddRole: React.FC = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/auth/system-setting/list-role');
  }
  const handleConfirm = () => {
    navigate('/auth/system-setting/list-role');
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9138'
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
              <Form onFinish={handleConfirm}>
                <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                  <Card>
                    <Space direction='vertical' style={{ width: '100%' }}>
                      <Row>
                        <Text strong className='label-h2'>Thông tin vai trò</Text>
                      </Row>
                      <Row gutter={24}>
                        <Col span={12}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Tên vai trò:</Text><Text type='danger'>*</Text>
                            </div>
                            <Form.Item
                              name={'tenVaiTro'}
                              rules={[{
                                required: true,
                                message: 'Vui lòng nhập tên vai trò!'
                              }]}>
                              <Input type='text' placeholder='Nhập tên vai trò' size='large' />
                            </Form.Item>
                          </Space>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Mô tả:</Text>
                            </div>
                            <Form.Item
                              name={'moTa'}>
                              <TextArea autoSize={{ minRows: 5 }} placeholder='Mô tả dịch vụ' />
                            </Form.Item>
                          </Space>
                          <Space>
                            <Text type='danger'>* <Text>Là trường thông tin bắt buộc</Text></Text>
                          </Space>
                        </Col>
                        <Col span={12}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Phân quyền chức năng:</Text>
                            </div>
                            <Card style={{ background: '#FFF2E7' }}>
                              <Space direction='vertical'>
                                <Space direction='vertical'>
                                  <Text className='label-h2' strong>Nhóm chức năng A</Text>
                                  <Checkbox value={'Tất cả'}>Tất cả</Checkbox>
                                  <Checkbox>Chức năng X</Checkbox>
                                  <Checkbox>Chức năng Y</Checkbox>
                                  <Checkbox>Chức năng Z</Checkbox>
                                </Space>
                                <Space direction='vertical'>
                                  <Text className='label-h2' strong>Nhóm chức năng B</Text>
                                  <Checkbox value={'Tất cả'}>Tất cả</Checkbox>
                                  <Checkbox>Chức năng X</Checkbox>
                                  <Checkbox>Chức năng Y</Checkbox>
                                  <Checkbox>Chức năng Z</Checkbox>
                                </Space>
                              </Space>
                            </Card>
                          </Space>
                        </Col>
                      </Row>
                    </Space>
                  </Card>
                  <Row justify={'center'} align={'middle'}>
                    <Space>
                      <Form.Item>
                        <Button className='btn-cancel' onClick={handleCancel}>Hủy bỏ</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType='submit' className='btn-submit' type='ghost'>Thêm</Button>
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

export default AddRole;