import { Avatar, Col, Form, Input, Row, Typography, theme } from 'antd'
import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { GetAccountByID } from '../../firebase/controller';
import { auth } from '../../firebase/firebaseConfig';
import { AccountType } from '../../type/types';

const UserInfo: FC = () => {
    const [account,setAccount] = React.useState<AccountType>();
    React.useEffect(()=>{
        const getData = async () =>{
            setAccount(await GetAccountByID(auth.currentUser?.uid!));
        }
        getData();
    },[])
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
                        <Typography.Title level={3}>{account?.hoTen}</Typography.Title>
                    </Col>
                </Row>

            </Col>
            <Col span={9}>
                <Form style={{ margin: '10px' }}>
                    <Form.Item>
                        <Typography.Text>Tên người dùng</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.hoTen} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Số điện thoại</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.soDienThoai} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Email:</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.email} size='middle' />
                    </Form.Item>
                </Form>
            </Col>
            <Col span={9}>
                <Form style={{ margin: '10px' }}>
                    <Form.Item>
                        <Typography.Text>Tên đăng nhập</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.tenDangNhap} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Mật khẩu</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.matKhau} size='middle' />
                    </Form.Item>
                    <Form.Item>
                        <Typography.Text>Vai trò</Typography.Text>
                        <Input type='text' width={'100%'} disabled value={account?.vaiTro} size='middle' />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default UserInfo