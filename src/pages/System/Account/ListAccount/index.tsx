import React from 'react'
import { Button, Col, ConfigProvider, Input, Layout, Row, Select, Space, Table, Typography } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { SelectionRole } from '../../../../components/Selection/ItemSelection';
import { ColumnsType } from 'antd/es/table';
import { AccountType } from '../../../../type';
import { dataAccount } from '../../../../data';


const columns: ColumnsType<AccountType> = [
  {
    title: 'Tên đăng nhập',
    key: 'tenDangNhap',
    dataIndex: 'tenDangNhap',
  },
  {
    title: 'Họ tên',
    key: 'hoTen',
    dataIndex: 'hoTen'
  },
  {
    title: 'Số điện thoại',
    key: 'soDienThoai',
    dataIndex: 'soDienThoai',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email'
  },
  {
    title: 'Vai trò',
    key: 'vaiTro',
    dataIndex: 'vaiTro'
  },
  {
    title: 'Trạng thái hoạt động',
    key: 'trangThaiHoatDong',
    dataIndex: 'trangThaiHoatDong'
  },
  {
    key: 'capNhat',
    render: () => (
      <Space>
        <NavLink to={'/auth/system-setting/list-account/update-account'}>Cập nhật</NavLink>
      </Space>
    )
  }
]
const { Text } = Typography;
const ListAccount: React.FC = () => {
  const navigate = useNavigate();
  const handleAddAccount = () => {
    navigate('/auth/system-setting/list-account/add-account');
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9138'
        }
      }}>
      <Layout>
        <Space direction='vertical'>
          <Row>
            <Col span={22} style={{ paddingLeft: 16 }}>
              <Text className='label-h1' strong>Danh sách tài khoản</Text>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row justify={'space-evenly'}>
            <Col span={22} style={{ paddingLeft: 16 }}>
              <Row justify={'space-between'}>
                <Space direction='vertical'>
                  <Text strong>Tên vai trò</Text>
                  <Select
                    size='large'
                    options={SelectionRole}
                    style={{ width: 300 }}
                    defaultValue={'Tất cả'} />
                </Space>
                <Space direction='vertical'>
                  <Text strong>Từ khóa</Text>
                  {/* <Input.Search/> */}
                  <Input
                    size='large'
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
                dataSource={dataAccount}
                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
                bordered
                size='middle'
                pagination={{pageSize:9 }} />
            </Col>
            <Col span={2}>
              <Layout>
                <Row justify={'end'} align={'middle'}>
                  <Button style={{ background: '#FFF2E7', height: 104, width: 95 }} onClick={handleAddAccount}>
                    <Space direction='vertical' align='center' size={'small'}>
                      <PlusCircleOutlined style={{ display: 'flex', justifyContent: 'center', height: 23, width: 23, background: '#FF7506', color: '#FFF2E7', borderRadius: 5 }} />
                      <Text style={{ whiteSpace: 'initial', color: '#FF9138' }} strong>Thêm tài khoản</Text>
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

export default ListAccount;