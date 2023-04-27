import { Row, Space, Typography } from 'antd'
import React from 'react'

const { Text } = Typography;
const textstyle: React.CSSProperties = {
    color: 'white',
}
const ModelNumbering:React.FC = () => {
    return (
        <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
            <Space direction='vertical' align='center' style={{ width: '100%' }}>
                <Row justify={'center'}>
                    <Text className='label-title'>Số thứ tự được cấp</Text>
                </Row>
                <Row justify={'center'}>
                    <Text className='label-number'>2001201</Text>
                </Row>
                <Row justify={'center'}>
                    <Text>DV: Khám răng hàm mặt<Text strong>(Tại quầy số 1)</Text></Text>
                </Row>
            </Space>
            <Row justify={'center'} style={{ width: '100%', background: '#FF9138', padding: 10, }}>
                <Text strong style={textstyle}>Thời gian cấp: 09:30 11/10/2021</Text>
                <Text strong style={textstyle}>Hạn sử dụng: 17:30 11/10/2021</Text>
            </Row>
        </Space>
    )
}

export default ModelNumbering