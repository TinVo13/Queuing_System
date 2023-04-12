import { Avatar, Breadcrumb, Col, Row, Typography, theme, } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const Topbar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Row justify={'center'} align={'middle'} style={{ background: colorBgContainer, padding: '10px' }}>
            <Col md={20}>
                <Breadcrumb>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col md={4}>
                <Row justify={'center'} align={'middle'}>
                    <Col md={6}>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                    </Col>
                    <Col md={18}>
                        <Row>
                            <Col style={{ width: '100%' }}>
                                <Typography.Text>VoTrungTin</Typography.Text>
                            </Col>
                            <Col>
                                <Typography.Text>VoTrungTin</Typography.Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Topbar