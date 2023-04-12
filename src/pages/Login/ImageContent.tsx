import { Image } from 'antd'
import React from 'react'

const ImageContent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Image src={require('../../image/login.png')} alt='hinh anh' preview={false}/>
    </div>
  )
}

export default ImageContent