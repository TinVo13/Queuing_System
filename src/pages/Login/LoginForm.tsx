import { Alert, ConfigProvider, Image, Space, Spin, Typography, } from 'antd'
import { Form, Input, Button } from 'antd';
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';


const LoginStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-Content: center;
    align-Items: center;
`
const ButtonStyle = styled(Button)`
    background: #FF7506;
    color: white;
    width: 150px;
    border: none;
    justify-content: center;
    align-items: center;
`
const InputStyle = styled(Input)`
    width: 400px;
`
interface Account {
    userName: string,
    password: string
}
const { Title } = Typography;
const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const handleSignIn = async (values: Account) => {
        // console.log(values);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, values.userName, values.password);
            setLoading(false);
            navigate('/dashboard')
        } catch (error) {
            console.log(error);
            setLoading(false);
            <Alert message="Sai Email hoặc mật khẩu!" type='error' showIcon/>
        }
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF7506',
                }
            }}>
            {loading ? (<Space><Spin size='large' /><Title level={1}>Đang đăng nhập...</Title></Space>) :
                <LoginStyle>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={(values) => handleSignIn(values)}
                    >
                        <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src={require('../../assets/logo.png')} width={200} alt='hinh anh' preview={false} />
                        </Form.Item>
                        Tên đăng nhập *
                        <Form.Item
                            name="userName"
                            hasFeedback
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
                            hasFeedback
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
                            <a className="login-form-forgot" href="/forgot-password" style={{ color: 'red' }}>
                                Quên mật khẩu
                            </a>
                        </Form.Item>
                        <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ButtonStyle htmlType="submit" className="login-form-button">
                                Đăng nhập
                            </ButtonStyle>
                        </Form.Item>
                    </Form>
                </LoginStyle>
            }

        </ConfigProvider>
    )
}

export default LoginForm