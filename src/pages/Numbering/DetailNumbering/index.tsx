import React from 'react'
import { Badge, Button, Card, Col, ConfigProvider, Layout, Row, Space, Typography } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Text } = Typography;
const DetailNumbering: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        inherit: false,
        token: {
          colorPrimary: '#FF9138',
          colorBorder: '#FFF2E7',
        },
        components: {
          Badge: {
            colorPrimary: '#4277FF'
          }
        }
      }}>
      <Layout>
        <Space direction='vertical'>
          <Row>
            <Col span={22}>
              <Text className='label-h1' strong>Quản lý cấp số</Text>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row>
            <Col span={22} style={{ paddingLeft: 16 }}>
              <Card style={{ height: '80vh' }}>
                <Space direction='vertical' style={{ width: '100%' }}>
                  <Text className='label-h2' strong>Thông tin cấp số</Text>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <Row>
                          <Col span={5}>
                            <Text strong>Họ tên:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>Võ Trung Tín</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Tên dịch vụ:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>Khám tim mạch</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Số thứ tự:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>2001201</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Thời gian cấp:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>14:35 - 07/11/2021</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Hạn sử dụng:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>18:00 - 07/11/2021</Text>
                          </Col>
                        </Row>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space direction='vertical' style={{ width: '100%' }}>
                        <Row>
                          <Col span={5}>
                            <Text strong>Nguồn cấp:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>Kiosk</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Trạng thái:</Text>
                          </Col>
                          <Col span={19}>
                            <Badge status='processing' text='Đang chờ' />
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Số điện thoại:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>0388055012</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Địa chỉ Email:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>nguyenvana@gmail.com</Text>
                          </Col>
                        </Row>
                      </Space>
                    </Col>
                  </Row>
                </Space>
              </Card>
            </Col>
            <Col span={2}>
              <Row justify={'end'} align={'middle'}>
                <Button
                  style={{ height: 75, width: 80,background:'#FFF2E7'}}
                  onClick={()=>navigate('/auth/numbering/list-numbering')}>
                  <Row justify={'center'} align={'middle'}>
                    <RollbackOutlined style={{ background: '#FF9138', padding: 5, borderRadius: 8, color: 'white' }} />
                    <Text style={{color:'#FF9138'}}>Quay lại</Text>
                  </Row>
                </Button>
              </Row>
            </Col>
          </Row>
        </Space>
      </Layout>
    </ConfigProvider>
  )
}

export default DetailNumbering;