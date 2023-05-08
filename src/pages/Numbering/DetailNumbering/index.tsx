import React from 'react'
import { Badge, Button, Card, Col, ConfigProvider, Layout, Row, Space, Typography } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { NumberingType } from '../../../type/types';
import { getNumberingByID } from '../../../firebase/controller';


const { Text } = Typography;
const DetailNumbering: React.FC = () => {
  const {key} = useParams();
  const navigate = useNavigate();
  const [numbering,setNumbering] = React.useState<NumberingType>();

  React.useEffect(()=>{
    const getNumberingData = async () => {
      setNumbering(await getNumberingByID(String(key)));
    }
    getNumberingData();
  },[]);
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
            <Col span={22} style={{paddingLeft:16}}>
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
                            <Text>{numbering?.tenKhachHang}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Tên dịch vụ:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.tenDichVu}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Số thứ tự:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.stt}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Thời gian cấp:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.thoiGianCap}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Hạn sử dụng:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.hanSuDung}</Text>
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
                            <Text>{numbering?.nguonCap}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Trạng thái:</Text>
                          </Col>
                          <Col span={19}>
                            <Badge status='processing' text={numbering?.trangThai} />
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Số điện thoại:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.soDienThoai}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={5}>
                            <Text strong>Địa chỉ Email:</Text>
                          </Col>
                          <Col span={19}>
                            <Text>{numbering?.email}</Text>
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
                  onClick={()=>navigate('/numbering/list-numbering')}>
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