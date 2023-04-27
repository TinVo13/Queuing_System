import { Button, ConfigProvider, Form, Image, Input, Typography, theme } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FormItem from 'antd/es/form/FormItem'


const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -10px;
`
const FormItemStyle = styled(FormItem)` 
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonStyle = styled(Button)`
  width: 150px;
  background: #FF7506;
  color: white;
`
const FormContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    navigate('/auth/dashboard');
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF7506',
          colorBgContainer: colorBgContainer,
        }
      }}>
      <DivStyle>
        <Image alt='hinh anh' src={require('../../assets/logo.png')} width={200} preview={false} />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name={'title'}>
            <Typography.Title>Đặt lại mật khẩu mới</Typography.Title>
          </Form.Item>
          <Typography.Text>Mật khẩu</Typography.Text>
          <Form.Item
            name={'password'}
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input className='input-field' type='password' minLength={8} placeholder='Password...'></Input>
          </Form.Item>
          <Typography.Text>Nhập lại mật khẩu</Typography.Text>
          <Form.Item
            name={'re-password'}
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}>
            <Input className='input-field' type='password' minLength={8} placeholder='Password...'></Input>
          </Form.Item>
          <FormItemStyle
            name={'button'}>
            <ButtonStyle className='button' htmlType='submit'>Xác nhận</ButtonStyle>
          </FormItemStyle>
        </Form>
      </DivStyle>
    </ConfigProvider>

  )
}

export default FormContent