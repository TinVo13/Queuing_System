import { Avatar, Col, Row, Typography, Card, Select } from 'antd'
import React from 'react'
import { CalendarTwoTone, ScheduleTwoTone, ContactsTwoTone, DiffTwoTone, ArrowUpOutlined, ArrowDownOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { Line } from '@ant-design/charts';
const { Text } = Typography;
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};
const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'
    , '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: '',
            data: labels.map(() => Math.random() * 6000),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.5,
        },
    ],
};

const style: React.CSSProperties = {
    background: 'white',
    padding: '8px 0',
    borderRadius: '10px'
};
const Chart: React.FC = () => {

    return (
        <div style={{ margin: '16px' }}>
            <Text style={{ fontSize: 24 }} type='warning'>Biểu đồ cấp số</Text>
            <Row gutter={20} style={{ marginTop: '16px' }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Row justify={'center'} align={'middle'} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Avatar style={{ background: '#E8EFFE' }} icon={<CalendarTwoTone twoToneColor={'#6493F9'} />} size={48} />
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Col span={16}>
                                        <Text>Số thứ tự đã cấp</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify={'center'} align={'middle'} style={{ padding: '0 16px' }}>
                            <Col span={16}>
                                <Text style={{ fontSize: 30 }}>4.343</Text>
                            </Col>
                            <Col span={8}>
                                <div style={{ borderRadius: '10px', background: 'orange' }}>
                                    <Text>31,32%</Text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Row justify={'center'} align={'middle'} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Avatar style={{ background: '#E1F7E6' }} icon={<ScheduleTwoTone twoToneColor={'#35C75A'} />} size={48} />
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Col span={16}>
                                        <Text>Số thứ tự đã cấp</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify={'center'} align={'middle'} style={{ padding: '0 16px' }}>
                            <Col span={16}>
                                <Text style={{ fontSize: 30 }}>4.343</Text>
                            </Col>
                            <Col span={8}>
                                <div style={{ borderRadius: '10px', background: 'orange' }}>
                                    <Text>31,32%</Text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Row justify={'center'} align={'middle'} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Avatar style={{ background: '#FFF3E9' }} icon={<ContactsTwoTone twoToneColor={'#FFAC6A'} />} size={48} />
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Col span={16}>
                                        <Text>Số thứ tự đã cấp</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify={'center'} align={'middle'} style={{ padding: '0 16px' }}>
                            <Col span={16}>
                                <Text style={{ fontSize: 30 }}>4.343</Text>
                            </Col>
                            <Col span={8}>
                                <div style={{ borderRadius: '10px', background: 'orange' }}>
                                    <Text>31,32%</Text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Row justify={'center'} align={'middle'} style={{ padding: '16px' }}>
                            <Col span={8}>
                                <Avatar style={{ background: '#FEE9E9' }} icon={<DiffTwoTone twoToneColor={'#F86D6D'} />} size={48} />
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Col span={16}>
                                        <Text>Số thứ tự đã cấp</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify={'center'} align={'middle'} style={{ padding: '0 16px' }}>
                            <Col span={16}>
                                <Text style={{ fontSize: 30 }}>4.343</Text>
                            </Col>
                            <Col span={8}>
                                <div style={{ borderRadius: '10px', background: 'orange' }}>
                                    <Text>31,32%</Text>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Text>Bảng thống kê theo ngày</Text>
                            </div>
                            <div>
                                <Text>Xem theo</Text>
                                <Select
                                    defaultValue="Ngày"
                                    style={{ width: 120 }}
                                    options={[
                                        { value: 'Ngày', label: 'Ngày' },
                                        { value: 'Tuần', label: 'Tuần' },
                                        { value: 'Tháng', label: 'Tháng' }
                                    ]}
                                />
                            </div>
                        </div>
                        <Line data={data} options={options} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Chart