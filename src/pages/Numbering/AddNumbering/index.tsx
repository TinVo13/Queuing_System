import { ConfigProvider, Layout, Typography } from 'antd';
import React from 'react'

const {Text} = Typography;
const AddNumbering:React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token:{
          colorPrimary:'#FF7506'
        }
      }}>
        <Layout style={{margin:16}}>
          <Text strong>Quản lý cấp số</Text>
        </Layout>
    </ConfigProvider>
  )
}

export default AddNumbering;