import { Button, ConfigProvider, Form, Image, Input, Typography, theme } from 'antd'
import React from 'react'
import styled from 'styled-components'


const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -10px;
`
const FormItemStyle = styled(Form.Item)` 
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonStyle = styled(Button)`
  width: 150px;
  background: orange;
  color: white;
`
const FormContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'orange',
          colorBgContainer: colorBgContainer,
        }
      }}>
      <DivStyle>
        <Image alt='hinh anh' src={require('../../image/logo.png')} width={200} preview={false}/>
        <Form>
          <Form.Item>
            <Typography.Title>Đặt lại mật khẩu mới</Typography.Title>
          </Form.Item>
          <Form.Item
            name={'enter-password'}
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            Mật khẩu
            <Input type='password' width={'100%'} />
          </Form.Item>
          <Form.Item
            name={'re-enter-password'}
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}>
            Nhập lại mật khẩu
            <Input type='password' width={'100%'} ></Input>
          </Form.Item>
          <FormItemStyle>
            <ButtonStyle htmlType='submit'>Xác nhận</ButtonStyle>
          </FormItemStyle>
        </Form>
      </DivStyle>
    </ConfigProvider>

  )
}

export default FormContent