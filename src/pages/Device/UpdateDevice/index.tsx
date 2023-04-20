import { Card, Col, ConfigProvider, Form, Input, Row, Select, Space, Typography, SelectProps, Button } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react'
import TagRender from '../../../components/CustomTag';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;
const options: SelectProps['options'] = [
  {
    label: 'Khám tim mạch',
    value: 'khám tim mạch'
  },
  {
    label: 'Khám sản phụ khoa',
    value: 'khám sản phụ khoa'
  },
  {
    label: 'Khám răng hàm mặt',
    value: 'khám răng hàm mặt'
  },
  {
    label: 'Khám tai mũi họng',
    value: 'khám tai mũi họng'
  },
  {
    label: 'Khám hô hấp',
    value: 'khám hô hấp'
  },
  {
    label: 'Khám tổng quát',
    value: 'khám tổng quát'
  }
]
interface Device{
  ma_thiet_bi: string,
  ten_thiet_bi: string,
  loai_thiet_bi: string,
  ten_dang_nhap: string,
  mat_khau: string,
  dia_chi_ip: string,
  dich_vu: string[]
}
const initialValue: Device = {
  ma_thiet_bi: 'KIO_01',
  ten_thiet_bi: 'Kiosk',
  loai_thiet_bi: 'Kiosk',
  ten_dang_nhap: 'Tin',
  mat_khau: 'abc123',
  dia_chi_ip: '192.168.0.10',
  dich_vu: ['Khám tim mạch']
}
const UpdateDevice: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'orange'
          }
        }}>
        <Space direction='vertical' style={{height: '60vh'}}>
          <Text className='device-manager'>Quản lý thiết bị</Text>
          <Row>
            <Col span={23}>
              <Form 
                onFinish={()=>navigate('device/list-device')}
                initialValues={initialValue}>
                <Card size='default'>
                  <Text className='device-info'>Thông tin thiết bị</Text>
                  <Row gutter={24} >
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Mã thiết bị: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'ma_thiet_bi'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập mã thiết bị!'
                          }]}>
                          <Input type='text' placeholder='Nhập mã thiết bị' size='large'/>
                        </Form.Item>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Loại thiết bị: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'loai_thiet_bi'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng chọn loại thiết bị!'
                          }]}>
                          <Select
                            options={[{ label: 'Kiosk', value: 'Kiosk' }, { label: 'Display counter', value: 'Display counter' }]}
                            size='large' />
                        </Form.Item>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Tên thiết bị: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'ten_thiet_bi'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập tên thiết bị!'
                          }]}>
                          <Input type='text' placeholder='Nhập tên thiết bị' size='large'/>
                        </Form.Item>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Tên đăng nhập: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'ten_dang_nhap'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập!'
                          }]}>
                          <Input type='text' placeholder='Nhập tên đăng nhập' size='large' />
                        </Form.Item>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Địa chỉ IP: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'dia_chi_ip'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập địa chỉ IP!'
                          }]}>
                          <Input type='text' placeholder='Nhập địa chỉ IP' size='large'/>
                        </Form.Item>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Mật khẩu: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'mat_khau'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!'
                          }]}>
                          <Input type='password' placeholder='Nhập mật khẩu' size='large'/>
                        </Form.Item>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={24}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <div>
                          <Text className='label-field'>Dịch vụ sử dụng: </Text>
                          <Text style={{ color: 'red' }}>*</Text>
                        </div>
                        <Form.Item
                          name={'dich_vu'}
                          rules={[{
                            required: true,
                            message: 'Vui lòng nhập dịch vụ!'
                          }]}>
                          <Select
                            mode='multiple'
                            tagRender={TagRender}
                            allowClear
                            style={{ width: '100%' }}
                            placeholder='Chọn một dịch vụ'
                            options={options}
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
                <Row justify={'center'} align={'middle'} className='footer'>
                  <Space>
                    <Form.Item>
                      <Button className='btn-cancel' onClick={()=>navigate('/device/list-device')}>Hủy bỏ</Button>
                    </Form.Item>
                    <Form.Item>
                      <Button className='btn-submit' htmlType='submit'>Thêm thiết bị</Button>
                    </Form.Item>
                  </Space>
                </Row>
              </Form>
            </Col>
            <Col span={1}></Col>
          </Row>
        </Space>
      </ConfigProvider>
    </Layout>
  )
}

export default UpdateDevice;