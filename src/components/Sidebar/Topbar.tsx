import { Avatar, Breadcrumb, Button, Col, Popover, Row, Typography, } from 'antd';
import React from 'react';
import { UserOutlined, BellTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification';

const Topbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Row justify={'center'} align={'middle'} style={{ padding: '10px' }}>
                <Col span={18}>
                    <Breadcrumb items={[{title:'Dashboard'},{title:'Device'}]}/>
                </Col>
                <Col span={2}>
                    <Popover content={<Notification/>} title="Thông báo" trigger={'click'} placement='bottomRight' style={{width:'360px'}}>
                        <Button icon={<BellTwoTone style={{color:'orange',background:'#FFF2E7'}}/>} style={{color:'orange',background:'#FFF2E7'}}></Button>
                    </Popover>
                </Col>
                <Col span={4}>
                    <Row justify={'center'} align={'middle'}>
                        <Col md={6}>
                            <Avatar size={'large'} icon={<UserOutlined />} onClick={() => navigate('/userinfo')}/>
                        </Col>
                        <Col md={18}>
                            <Row>
                                <Col style={{ width: '100%' }}>
                                    <Typography.Text>Xin chào</Typography.Text>
                                </Col>
                                <Col>
                                    <Typography.Text onClick={()=>navigate('/userinfo')}>VoTrungTin</Typography.Text>
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