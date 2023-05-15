import { Button, Card, Col, ConfigProvider, Row, Space, Typography } from 'antd'
import Layout from 'antd/es/layout/layout'
import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom';
import { DeviceType } from '../../../type/types';
import { GetDeviceByID } from '../../../firebase/controller';

const { Text, Paragraph } = Typography;
const DetailDevice: React.FC = () => {
  const { key } = useParams();
  const [device, setDevice] = React.useState<DeviceType>()
  const navigate = useNavigate();
  
  //get device by key
  React.useEffect(() => {
    const getDeviceData = async () => {
      setDevice(await GetDeviceByID(String(key)));
    }
    getDeviceData();
  }, []);
  const handleUpdate = () => {
    navigate(`/device/list-device/update-device/${device?.key}`)
  }
  //console.log(device);
  return (
    <Layout style={{ margin: 16, }}>
      <Row>
        <Col span={24}>
          <Text className='label-h1' strong>Quản lý thiết bị</Text>
        </Col>
      </Row>
      <Row>
        <Col span={22}>
          <Card>
            <Space direction='vertical' style={{ width: '100%', height: '60vh' }}>
              <Row>
                <Col span={24}>
                  <Text className='label-h2' strong>Thông tin thiết bị</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Mã thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.maThietBi}</Text>
                </Col>
                <Col span={4}>
                  <Text strong>Loại thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.loaiThietBi}</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Tên thiết bị:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.tenThietBi}</Text>
                </Col>
                <Col span={4}>
                  <Text strong>Tên đăng nhập:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.tenDangNhap}</Text>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Địa chỉ IP:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.diaChiIP}</Text>
                </Col>
                <Col span={4}>
                  <Text strong>Mật khẩu:</Text>
                </Col>
                <Col span={8}>
                  <Text>{device?.matKhau}</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text strong>Dịch vụ sử dụng:</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  {device?.dichVuSuDung?.join(', ')}
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
                  colorPrimary: '#FF7506'
                }
              }}>
              <Button className='btn-update' onClick={()=>handleUpdate()}>
                <EditOutlined style={{ background: '#FF7506', color: '#FFF2E7', padding: 5, borderRadius: 10 }} />
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