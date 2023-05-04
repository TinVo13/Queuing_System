import { Avatar, Breadcrumb, Button, Col, Popover, Row, Typography, } from 'antd';
import React from 'react';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const Topbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Row justify={'center'} align={'middle'} style={{ padding:"0px 16px" }}>
                <Col span={18}>
                    <BreadCrumb/>
                </Col>
                <Col span={1}>
                    <Popover content={<Notification />} title="Thông báo" trigger={'click'} placement='bottomRight' style={{ width: '360px' }}>
                        <Button icon={<BellOutlined style={{ color: '#FF7506' }} />} style={{ color: '#FF7506', background: '#FFF2E7' }} type='ghost'></Button>
                    </Popover>
                </Col>
                <Col span={5}>
                    <Row justify={'center'} align={'middle'}>
                        <Col md={6}>
                            <Avatar size={'large'} icon={<UserOutlined />} onClick={() => navigate('/userinfo')} />
                        </Col>
                        <Col md={18}>
                            <Row>
                                <Col style={{ width: '100%' }}>
                                    <Typography.Text>Xin chào</Typography.Text>
                                </Col>
                                <Col>
                                    <Typography.Text onClick={() => navigate('/userinfo')}>VoTrungTin</Typography.Text>
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