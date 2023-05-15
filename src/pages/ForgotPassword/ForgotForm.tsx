import { Alert, Button, ConfigProvider, Form, Image, Input, Typography, message } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../../firebase/firebaseConfig'


const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const FormStyle = styled(Form)`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormItemStyle = styled(FormItem)`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputStyle = styled(Input)`
    min-width: 350px;
`
const ButtonStyle = styled(Button)`
    background: #FF7506;
    color: white;
    margin-left: 10px
`
const ForgotForm: FC = () => {
    const navigate = useNavigate();
    const onFinish = (values: string) => {
        console.log('Received values of form: ', values);
        sendPasswordResetEmail(auth, values)
            .then(() => {
                alert('Đã gửi enail đặt lại mật khẩu!')
                // <Alert message="Đã gửi enail đặt lại mật khẩu!" type='success' showIcon/>
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    alert('User not found, try again!')
                  }
            });
        console.log(values);
        navigate('/login');
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF7506',
                }
            }}>
            <ContainerStyle>
                <Image src={require('../../assets/logo.png')} width={200} preview={false} />
                <Typography.Title>Đặt lại mật khẩu</Typography.Title>
                <Typography.Text>Vui lòng hập Email để đặt lại mật khẩu của bạn*</Typography.Text>
                <FormStyle onFinish={(values:any)=>onFinish(values)}>
                    <FormItemStyle
                        name={'email'}
                        hasFeedback
                        rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}>
                        <InputStyle type='email' minLength={10} placeholder='Example abc@gmail.com...'></InputStyle>
                    </FormItemStyle>
                    <FormItemStyle >
                        <Button className='form-item-cancel' onClick={() => navigate('/login')}>Hủy</Button>
                        <ButtonStyle htmlType='submit' className='form-item-continue'>Tiếp tục</ButtonStyle>
                    </FormItemStyle>
                </FormStyle>
            </ContainerStyle>
        </ConfigProvider>
    )
}

export default ForgotForm