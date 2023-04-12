import { Col, Row } from 'antd'
import React from 'react'
import FormContent from './FormContent'
import ImageContent from './ImageContent'

const ResetPassword = () => {
  return (
    <Row justify={'center'} align={'middle'}>
        <Col span={10} style={{background:'#f6f6f6'}}><FormContent/></Col>
        <Col span={14}><ImageContent/></Col>
    </Row>
  )
}

export default ResetPassword