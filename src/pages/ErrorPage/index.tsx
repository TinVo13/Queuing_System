import { Typography } from 'antd';
import React from 'react'
import { CSSProperties } from 'styled-components';

const style: CSSProperties = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
}
const {Title} = Typography;
const ErrorPage:React.FC = () => {
  return (
    <div style={style}>
        <Title level={1}>Trang bạn truy cập không tồn tại!</Title>
    </div>
  )
}

export default ErrorPage;