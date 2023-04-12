import { Avatar, Col, Form, Input, Row, Typography, theme } from 'antd'
import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons';

const UserInfo: FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Row justify={'center'} align={'middle'} style={{ background: colorBgContainer, padding: '16px' }}>
            <Col span={6}>
                <Row justify={'center'} align={'middle'}>
                    <Col style={{width:'100%'}}>
                        <Row justify={'center'} align={'middle'}>
                            <Avatar icon={<UserOutlined />} size={200}/>
                        </Row>
                    </Col>
                    <Col>
                        <Typography.Title level={3}>Vo Trung Tin</Typography.Title>
                    </Col>
                </Row>

            </Col>
            <Col span={9}>
                <Form style={{ margin: '10px' }}>
                    <Form.Item>
                        <Typography.Text>Tên người dùng</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'Vo Trung Tin'} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Số điện thoại</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'0388055011'} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Email:</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'votrungtinoppo@gmail.com'} size='middle' />
                    </Form.Item>
                </Form>
            </Col>
            <Col span={9}>
                <Form style={{ margin: '10px' }}>
                    <Form.Item>
                        <Typography.Text>Tên đăng nhập</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'VoTrungTin'} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Mật khẩu</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'0388055011'} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Vai trò</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={'Kế toán'} size='middle' />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default UserInfo