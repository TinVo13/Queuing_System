import { Button, Card, Col, ConfigProvider, Form, Layout, Modal, Row, Select, Space, Typography } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ModelNumbering from '../../../components/Model/Numbering';

const { Text } = Typography;

const AddNumbering: React.FC = () => {
  const navigate = useNavigate();
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF7506'
        }
      }}>
      <Layout style={{ margin: 16 }}>
        <Space direction='vertical'>
          <Row>
            <Col span={24}>
              <Text strong className='label-h1'>Quản lý cấp số</Text>
            </Col>
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
                        <Button className='btn-cancel' onClick={() => navigate('/numbering/list-numbering')}>Hủy bỏ</Button>
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
        <Modal
          centered
          open={modelOpen}
          onCancel={() => setModelOpen(false)}
          width={400}
          footer={null}
        >
          <ModelNumbering/>
        </Modal>
      </Layout>
    </ConfigProvider>
  )
}

export default AddNumbering;