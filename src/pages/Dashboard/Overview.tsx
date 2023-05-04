import { Calendar, Card, Col, ConfigProvider, Progress, Row, Typography, theme, DatePicker, Badge } from 'antd'
import React from 'react';
import { TabletTwoTone, MessageTwoTone, DiffTwoTone } from '@ant-design/icons'


const { Text } = Typography;

const textstyle1: React.CSSProperties = {
    color: '#FF7506',
    fontSize: '14px',
}
const textstyle2: React.CSSProperties = {
    color: '#4277FF',
    fontSize: '14px',
}
const textstyle3: React.CSSProperties = {
    color: '#35C75A',
    fontSize: '14px',
}
const Overview: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{ padding: '16px', background: colorBgContainer }}>
            <Text className='label-h1' strong>Tổng quan</Text>
            <Row style={{ margin: '16px 0' }} justify={'center'} align={'middle'}>
                <Col span={24}>
                    <Card size='small'>
                        <Row justify={'center'} align={'middle'}>
                            <Col span={5}>
                                <Row justify={'center'} align={'middle'}>
                                    <Progress type='circle' percent={90} size={50} strokeColor={'#FF7506'}>
                                        {/* <Progress type='circle' percent={10} size={80}/> */}
                                    </Progress>
                                </Row>

                            </Col>
                            <Col span={6} style={{ padding: '5px' }}>
                                <Row>
                                    <Col span={24}>
                                        <Text style={{ fontSize: 24 }}>4.322</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <TabletTwoTone twoToneColor={'#FF7506'} />
                                        <Text style={{ color: '#FF7506' }}>Thiết bị</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={9}>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='warning' text='Đang hoạt động' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='default' text='Ngưng hoạt động' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <Row>
                                    <Col>
                                        <Text style={textstyle1}>3.750</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={textstyle1}>750</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row style={{ margin: '16px 0' }}>
                <Col span={24}>
                    <Card size='small' >
                        <Row justify={'center'} align={'middle'}>
                            <Col span={5}>
                                <Row justify={'center'} align={'middle'}>
                                    <Progress type='circle' percent={76} size={50} strokeColor={'#4277FF'} />
                                </Row>
                            </Col>
                            <Col span={6} style={{ padding: '5px' }}>
                                <Row>
                                    <Col span={24}>
                                        <Text style={{ fontSize: 24 }}>4.322</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <MessageTwoTone twoToneColor={'#4277FF'} />
                                        <Text style={{ color: '#4277FF' }}>Dịch vụ</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={9}>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='processing' text='Đang hoạt động' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='default' text='Ngưng hoạt động' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <Row>
                                    <Col>
                                        <Text style={textstyle2}>3.750</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={textstyle2}>750</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row style={{ margin: '16px 0' }}>
                <Col span={24}>
                    <Card size='small' >
                        <Row justify={'center'} align={'middle'}>
                            <Col span={5}>
                                <Row justify={'center'} align={'middle'}>
                                    <Progress type='circle' percent={86} size={50} strokeColor={'#35C75A'} />
                                </Row>
                            </Col>
                            <Col span={6} style={{ padding: '5px' }}>
                                <Row>
                                    <Col span={24}>
                                        <Text style={{ fontSize: 24 }}>4.322</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <DiffTwoTone size={15} twoToneColor={'#35C75A'} />
                                        <Text type='success'>Cấp số</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={9}>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='success' text='Đã sử dụng' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='default' text='Đang chờ' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Badge status='error' text='Bỏ qua' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <Row>
                                    <Col>
                                        <Text style={textstyle3}>3.750</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={textstyle3}>750</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={textstyle3}>23</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Card size='default' style={{ height: '100%' }}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#FF7506',
                            },
                        }}
                    >
                        <DatePicker format={'DD/MM/YYYY'} showToday={false} placement='bottomLeft' />
                    </ConfigProvider>
                </Card>
            </Row>
        </div>
    )
}

export default Overview
