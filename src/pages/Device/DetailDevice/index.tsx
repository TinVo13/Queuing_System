import { Button, Card, Col, ConfigProvider, Row, Space, Typography } from 'antd'
import Layout from 'antd/es/layout/layout'
import React from 'react'
import './index.css';
import { EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const { Text, Paragraph } = Typography;
const DetailDevice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ margin: 16, }}>
      <Row>
        <Col span={24}>
          <Text className='device-manager'>Quản lý thiết bị</Text>
        </Col>
      </Row>
      <Row>
        <Col span={22}>
          <Card>
            <Space direction='vertical' style={{ width: '100%', height: '60vh' }}>
              <Row>
                <Col span={24}>
                  <Text className='device-info'>Thông tin thiết bị</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text className='text-device'>Mã thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>KIO_01</Text>
                </Col>
                <Col span={4}>
                  <Text className='text-device'>Loại thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>Kiosk</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text className='text-device'>Tên thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>Kiosk</Text>
                </Col>
                <Col span={4}>
                  <Text className='text-device'>Tên đăng nhập:</Text>
                </Col>
                <Col span={8}>
                  <Text>Tin</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text className='text-device'>Địa chỉ IP:</Text>
                </Col>
                <Col span={8}>
                  <Text>192.168.0.10</Text>
                </Col>
                <Col span={4}>
                  <Text className='text-device'>Mật khẩu:</Text>
                </Col>
                <Col span={8}>
                  <Text>abc123</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text className='text-device'>Dịch vụ sử dụng:</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</Text>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
        <Col span={2}>
          <Row justify={'end'} align={'middle'}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: 'orange'
                }
              }}>
              <Button className='btn-update' onClick={()=>navigate('/device/list-device/update-device')}>
                <EditOutlined style={{ background: 'orange', color: '#FFF2E7', padding: 5, borderRadius: 10 }} />
                <Paragraph style={{ whiteSpace: 'initial', fontSize: 14 }}>Cập nhật thiết bị</Paragraph>
              </Button>
            </ConfigProvider>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default DetailDevice