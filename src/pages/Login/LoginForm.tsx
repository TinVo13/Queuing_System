import { ConfigProvider, Image, } from 'antd'
import { Form, Input, Button } from 'antd';
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const LoginStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-Content: center;
    align-Items: center;
`
const ButtonStyle = styled(Button)`
    background: orange;
    color: white;
    width: 150px;
    border: none;
    justify-content: center;
    align-items: center;
`
const InputStyle = styled(Input)`
    width: 400px;
`


const LoginForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'orange',
                }
            }}>
            <LoginStyle>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item style={{display: 'flex',justifyContent:'center',alignItems:'center' }}>
                        <Image src={require('../../image/logo.png')} width={200} alt='hinh anh' preview={false}/>
                    </Form.Item>
                    Tên đăng nhập *
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập!' }]}
                    >
                        <InputStyle
                            className='input-field'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Tên đăng nhập"
                            size='large' />
                    </Form.Item>
                    Mật khẩu *
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <InputStyle
                            className='input-field'
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item> */}

                        <a className="login-form-forgot" href="login/reset-password" style={{ color: 'red' }}>
                            Quên mật khẩu
                        </a>
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ButtonStyle htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </ButtonStyle>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </LoginStyle>
        </ConfigProvider>
    )
}

export default LoginForm