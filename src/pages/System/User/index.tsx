import React from 'react'
import { Col, ConfigProvider, DatePicker, Input, Layout, Row, Select, Space, Table, Typography } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { UserLogType } from '../../../type/types';
import { dataUserLog } from '../../../data';

const {RangePicker} = DatePicker;

const {Text} = Typography;
const UserLog = () => {
  const columns: ColumnsType<UserLogType> = [
    {
        title:'Tên đăng nhập',
        key:'tenDangNhap',
        dataIndex:'tenDangNhap'
    },
    {
        title:'Thời gian tác động',
        key:'thoiGianTacDong',
        dataIndex:'thoiGianTacDong'
    },
    {
        title:'Ip thực hiện',
        key:'ipThucHien',
        dataIndex:'ipThucHien'
    },
    {
        title:'Thao tác thực hiện',
        key:'thaoTacThucHien',
        dataIndex:'thaoTacThucHien'
    },
]
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
                <Row justify={'space-between'}>
                  <Space direction='vertical'>
                    <Text strong>Chọn thời gian</Text>
                    <RangePicker/>
                  </Space>
                  <Space direction='vertical'>
                    <Text strong>Từ khóa</Text>
                    {/* <Input.Search/> */}
                    <Input
                      type='text'
                      placeholder='Nhập từ khóa'
                      suffix={<SearchOutlined style={{ color: '#FF7506' }} />}
                      style={{ width: 300 }} />
                  </Space>
                </Row>
              </Col>
              <Col span={2}></Col>
            </Row>
            <Row justify={'space-evenly'}>
              <Col span={22} style={{ paddingLeft: 16 }}>
                <Table
                  columns={columns}
                  dataSource={dataUserLog}
                  rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
                  bordered
                  size='middle'
                  pagination={{pageSize:10 }} />
              </Col>
              <Col span={2}>
                
              </Col>
            </Row>
          </Space>
        </Layout>
      </ConfigProvider>
    )
}

export default UserLog