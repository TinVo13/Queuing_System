import { Col, Row } from 'antd'
import React from 'react'
import LoginForm from './LoginForm'
import ImageContent from './ImageContent'

const Login = () => {
  return (
    <Row justify={'center'} align={'middle'}>
        <Col span={10} style={{background:'#f6f6f6'}}><LoginForm/></Col>
        <Col span={14}><ImageContent/></Col>
    </Row>
  )
}

export default Login