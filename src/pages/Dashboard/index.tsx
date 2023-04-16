import { Col, Row } from 'antd'
import React from 'react'
import Chart from './Chart'
import Overview from './Overview'

const Dashboard:React.FC = () => {
  return (
    <Row>
        <Col span={16}><Chart/></Col>
        <Col span={8}><Overview/></Col>
    </Row>
  )
}

export default Dashboard