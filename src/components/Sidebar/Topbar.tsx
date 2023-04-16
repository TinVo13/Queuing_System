import { Avatar, Breadcrumb, Button, Col, Row, Typography, } from 'antd';
import React from 'react';
import { UserOutlined, BellTwoTone } from '@ant-design/icons';

const Topbar: React.FC = () => {
    return (
        <div>
            <Row justify={'center'} align={'middle'} style={{ padding: '10px' }}>
                <Col span={18}>
                    <Breadcrumb items={[{title:'Dashboard'}]}/>
                </Col>
                <Col span={2}>
                    <Button icon={<BellTwoTone />}></Button>
                </Col>
                <Col span={4}>
                    <Row justify={'center'} align={'middle'}>
                        <Col md={6}>
                            <Avatar size={'large'} icon={<UserOutlined />} />
                        </Col>
                        <Col md={18}>
                            <Row>
                                <Col style={{ width: '100%' }}>
                                    <Typography.Text>Xin chào</Typography.Text>
                                </Col>
                                <Col>
                                    <Typography.Text>VoTrungTin</Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Topbar