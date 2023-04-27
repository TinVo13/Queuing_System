import {Image } from 'antd'
import React from 'react';

const ImageContent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Image src={require('../../assets/reset.png')} preview={false}/>
    </div>
  )
}

export default ImageContent