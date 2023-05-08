import React, { useState } from 'react'
import { Breadcrumb, Button, Card, ConfigProvider, Form, Image, Layout, Menu, Modal, Row, Select, Space, Typography } from 'antd';
import { LaptopOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import ModelNumbering from '../../../components/Model/Numbering';

const { Content, Sider } = Layout;
const { Text } = Typography;

const siderstyle: React.CSSProperties = {
  height: '100vh',
  background: 'white'
}
const NumberingWithoutLogin: React.FC = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const navigate = useNavigate();
  //const user = getAllUser();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9138'
        }
      }}>
      <Layout>
        <Sider style={siderstyle}>
          <div style={{ height: 100, margin: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Image src={require('../../../assets/logowhite.png')} width={150} preview={false} />
          </div>
          <Menu items={[
            { label: 'Cấp số', key: 'numbering', icon: <LaptopOutlined /> }]}
            defaultOpenKeys={['numbering']} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[
              {
                title: 'Cấp số',
                key: 'numbering'
              },
              {
                title: 'Danh sách cấp số',
                key: 'list-numbering'
              },
              {
                title: 'Cấp số mới',
                key: 'add-numbering'
              }
            ]} />
          <Content>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Row>
                <Text className='label-h1' strong>Quản lý cấp số</Text>
              </Row>
              <Card style={{ height: '75vh' }}>
                <Form
                  onFinish={() => setModelOpen(true)}>
                  <Row justify={'center'} align={'middle'}>
                    <Space direction='vertical' align='center' size={'large'}>
                      <Text className='label-h1' strong>CẤP SỐ MỚI</Text>
                      <Space direction='vertical' align='center'>
                        <Text strong>Dịch vụ khách hàng lựa chọn</Text>
                        <Form.Item
                          name={'dich vu'}
                          rules={[{
                            required: true,
                            message: 'Chọn 1 dịch vụ!'
                          }]}>
                          <Select
                            options={[
                              { label: 'Khám tim mạch', value: 'khám tim mạch' },
                              { label: 'Khám sản - Phụ khoa', value: 'khám sản - phụ khoa' },
                              { label: 'Khám răng hàm mặt', value: 'khám răng hàm mặt' },
                              { label: 'Khám tai mũi họng', value: 'khám tai mũi họng' },
                              { label: 'Khám hô hấp', value: 'khám hô hấp' },
                              { label: 'Khám tổng quát', value: 'khám tổng quát' }
                            ]}
                            placeholder={'Chọn dịch vụ'}
                            style={{ width: 400 }}
                            size='large' />
                        </Form.Item>
                      </Space>
                      <Row justify={'center'} align={'middle'} gutter={24}>
                        <Space>
                          <Form.Item>
                            <Button className='btn-cancel' onClick={() => navigate('/login')}>Hủy bỏ</Button>
                          </Form.Item>
                          <Form.Item>
                            <Button htmlType='submit' className='btn-submit'>In số</Button>
                          </Form.Item>
                        </Space>
                      </Row>
                    </Space>
                  </Row>
                </Form>
              </Card>
            </Space>
          </Content>
        </Layout>
        <Modal
          centered
          open={modelOpen}
          onCancel={() => setModelOpen(false)}
          width={400}
          footer={null}
        >
          <ModelNumbering />
        </Modal>
      </Layout>
    </ConfigProvider>

  )
}

export default NumberingWithoutLogin;