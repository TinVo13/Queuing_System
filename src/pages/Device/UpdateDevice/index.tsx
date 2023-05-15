import { Card, Col, ConfigProvider, Form, Input, Row, Select, Space, Typography, Button } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react'
import TagRender from '../../../components/CustomTag';
import { useNavigate, useParams } from 'react-router-dom';
import { AddDeviceType, DeviceType } from '../../../type/types';
import { SelectionService } from '../../../components/Selection/ItemSelection';
import { GetDeviceByID } from '../../../firebase/controller';
import { useAppDispatch } from '../../../store/store';
import { UPDATE_DEVICE } from '../../../store/features/deviceSlide';

const { Text } = Typography;

const UpdateDevice: React.FC = () => {
  const [form] = Form.useForm();
  const { key } = useParams();
  const [device, setDevice] = React.useState<DeviceType>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  React.useEffect(() => {
    const getDevice = async () => {
      setDevice(await GetDeviceByID(String(key)));
    }
    getDevice();
  }, []);
  React.useEffect(()=>{
    form.setFieldsValue(device);
  })
  const handleUpdateDevice = (values:AddDeviceType) => {
    dispatch(UPDATE_DEVICE({key:key!,device:values}))
    navigate('/device/list-device');
  }
  return (
    <Layout>
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
                <Form
                  form={form}
                  size='middle'
                  onFinish={(values:AddDeviceType) => handleUpdateDevice(values)}
                >
                  <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                    <Card>
                      <Row>
                        <Text className='label-h2' strong>Thông tin thiết bị</Text>
                      </Row>
                      <Row gutter={24}>
                        <Col span={12}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Mã thiết bị: </Text>
                              <Text type='danger'>*</Text>
                            </div>
                            <Form.Item
                              name={'maThietBi'}
                              hasFeedback
                              rules={[{
                                required: true,
                                message: 'Vui lòng nhập mã thiết bị!'
                              }]}>
                              <Input type='text' placeholder='Nhập mã thiết bị' size='large' />
                            </Form.Item>
                          </Space>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Tên thiết bị: </Text>
                              <Text style={{ color: 'red' }}>*</Text>
                            </div>
                            <Form.Item
                              name={'tenThietBi'}
                              hasFeedback
                              rules={[{
                                required: true,
                                message: 'Vui lòng nhập tên thiết bị!'
                              }]}>
                              <Input type='text' placeholder='Nhập tên thiết bị' size='large' />
                            </Form.Item>
                          </Space>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Địa chỉ IP: </Text>
                              <Text style={{ color: 'red' }}>*</Text>
                            </div>
                            <Form.Item
                              name={'diaChiIP'}
                              hasFeedback
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
                              <Text strong>Loại thiết bị: </Text>
                              <Text style={{ color: 'red' }}>*</Text>
                            </div>
                            <Form.Item
                              name={'loaiThietBi'}
                              hasFeedback
                              rules={[{
                                required: true,
                                message: 'Vui lòng chọn loại thiết bị!'
                              }]}>
                              <Select
                                options={[{ label: 'Kiosk', value: 'Kiosk' }, { label: 'Display counter', value: 'Display counter' }]}
                                size='large' />
                            </Form.Item>
                          </Space>
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
                                message: 'Vui lòng nhập tên đăng nhập!'
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
                              }]}>
                              <Input type='password' placeholder='Nhập mật khẩu' size='large' />
                            </Form.Item>
                          </Space>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Space direction='vertical' style={{ width: '100%' }}>
                            <div>
                              <Text strong>Dịch vụ sử dụng: </Text>
                              <Text style={{ color: 'red' }}>*</Text>
                            </div>
                            <Form.Item
                              name={'dichVuSuDung'}
                              hasFeedback
                              rules={[{
                                required: true,
                                message: 'Vui lòng nhập dịch vụ!'
                              }]}>
                              <Select
                                mode='tags'
                                tagRender={TagRender}
                                allowClear
                                style={{ width: '100%' }}
                                placeholder='Chọn một dịch vụ'
                                options={SelectionService}
                              />
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
                          <Button className='btn-cancel' onClick={() => navigate('/device/list-device')}>Hủy bỏ</Button>
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
    </Layout>
  )
}

export default UpdateDevice;