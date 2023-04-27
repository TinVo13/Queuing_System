import React from 'react'
import { Image } from 'antd'

const ImageContent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Image src={require('../../assets/login.png')} alt='hinh anh' preview={false}/>
    </div>
  )
}

export default ImageContent