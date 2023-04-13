import { Button, ConfigProvider, Form, Image, Input, Typography } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


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
    background: orange;
    color: white;
    margin-left: 10px
`
const ForgotForm: FC = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        navigate('/reset-password');
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'orange',
                }
            }}>
            <ContainerStyle>
                <Image src={require('../../image/logo.png')} width={200} preview={false} />
                <Typography.Title>Đặt lại mật khẩu</Typography.Title>
                <Typography.Text>Vui lòng hập Email để đặt lại mật khẩu của bạn*</Typography.Text>
                <FormStyle onFinish={onFinish}>
                    <FormItemStyle
                        name={'email'}
                        rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}>
                        <InputStyle type='email' minLength={10} placeholder='Example abc@gmail.com...'></InputStyle>
                    </FormItemStyle>
                    <FormItemStyle >
                        <Button className='form-item-cancel'>Hủy</Button>
                        <ButtonStyle htmlType='submit' className='form-item-continue'>Tiếp tục</ButtonStyle>
                    </FormItemStyle>
                </FormStyle>
            </ContainerStyle>
        </ConfigProvider>
    )
}

export default ForgotForm