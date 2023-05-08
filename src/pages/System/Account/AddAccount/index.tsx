import { Button, Card, Col, ConfigProvider, Form, Input, Layout, Row, Select, Space, Typography } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SelectionRole, Status } from '../../../../components/Selection/ItemSelection';
import { AddAccountType } from '../../../../type/types';
import { addAccount } from '../../../../firebase/controller';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase/firebaseConfig';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

const { Text } = Typography;
const AddAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/system-setting/list-account');
  }
  const handleAdd = (value: AddAccountType) => {
    createUserWithEmailAndPassword(auth, value.email, value.matKhau)
      .then(userCredential => {
        //add account to firestore
        const uid = userCredential.user.uid;
        addAccount(value, uid);
        console.log("Tạo thành công!")
        //store redux
        //const users = useAppSelector(state => state.account.accounts);

      }).catch(error => {
        console.log(error);
      })
    navigate('/system-setting/list-account');
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
                onFinish={handleAdd}
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
                            hasFeedback
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
                            hasFeedback
                            rules={[{
                              required: true,
                              min: 9,
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
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập Email!'
                            },
                            {
                              type: 'email',
                              message: 'Không đúng định dạng email!',
                            },]}>
                            <Input type='email' placeholder='Nhập Email' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Vai trò: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'vaiTro'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập vai trò!'
                            }]}>
                            <Select
                              size='large'
                              options={SelectionRole}
                              defaultValue={'tất cả'} />
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
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng điền tên đăng nhập!'
                            }]}>
                            <Input type='text' placeholder='Nhập tên đăng nhập' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Mật khẩu: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'matKhau'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập mật khẩu!'
                            }, {
                              min: 8,
                              message: 'Mật khẩu phải từ 8 ký tự trở lên!'
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
                            dependencies={['matKhau']}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập lại mật khẩu!'
                            }, {
                              min: 8,
                              message: 'Mật khẩu phải từ 8 ký tự trở lên!'
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('matKhau') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('Hai mật khẩu không trùng khớp!'));
                              },
                            })]}>
                            <Input type='password' placeholder='Nhập lại mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tình trạng: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'trangThaiHoatDong'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng chọn tình trạng!'
                            }]}>
                            <Select
                              options={Status}
                              size='large'
                              defaultValue={'Tất cả'} />
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
                        <Button htmlType='submit' className='btn-submit' type='ghost'>Thêm</Button>
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

export default AddAccount;