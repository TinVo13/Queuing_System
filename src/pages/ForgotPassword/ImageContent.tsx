import { Image } from 'antd'
import React, { FC } from 'react'

const ImageContent:FC = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Image src={require('../../image/reset.png')} preview={false}/>
    </div>
  )
}

export default ImageContent