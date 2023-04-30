import React from 'react'
import { Button, Col, ConfigProvider, DatePicker, Layout, Row, Space, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import TableReport from '../../components/Table/Report/TableReport';

const { Text } = Typography;
const { RangePicker } = DatePicker;

const Report: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9138'
        }
      }}>
      <Layout>
        <Space direction='vertical'>
          <Row justify={'space-evenly'}>
            <Col span={22} style={{ paddingLeft: 16 }}>
              <Space direction='vertical'>
                <Text strong>Chọn thời gian</Text>
                <RangePicker />
              </Space>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row justify={'space-evenly'}>
            <Col span={22} style={{ paddingLeft: 16 }}>
              <TableReport />
            </Col>
            <Col span={2}>
              <Layout>
                <Row justify={'end'} align={'middle'}>
                  <Button style={{ background: '#FFF2E7', height: 75, width: 80 }}>
                    <Space direction='vertical' align='center'>
                      <DownloadOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                      <Text style={{ whiteSpace: 'initial', color: '#FF9138' }} strong>Tải về</Text>
                    </Space>
                  </Button>
                </Row>
              </Layout>
            </Col>
          </Row>
        </Space>
      </Layout>
    </ConfigProvider>
  )
}

export default Report