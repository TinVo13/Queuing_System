import { Col, Row } from 'antd'
import React, { FC } from 'react'
import ImageContent from './ImageContent';
import ResetForm from './ResetForm';

const ForgotPassword:FC = () => {
  return (
    <Row justify={'center'} align={'middle'}>
        <Col span={10} style={{background:'#f6f6f6'}}><ResetForm/></Col>
        <Col span={14}><ImageContent/></Col>
    </Row>
  )
}

export default ForgotPassword;