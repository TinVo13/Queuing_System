import { Line } from '@ant-design/charts';
import React from 'react'

const data = [
    { Tuần: 'Tuần 1', value: 2700 },
    { Tuần: 'Tuần 2', value: 3600 },
    { Tuần: 'Tuần 3', value: 4200 },
    { Tuần: 'Tuần 4', value: 3800 },
];
const config = {
    data,
    autoFit: true,
    xField: 'Tuần',
    yField: 'value',
    point: {
        size: 5,
        shape: 'circle',
    },
    label: {
        style: {
            fill: '#aaa',
            opacity: 0.6,
        },
    },
    smooth: true,
    xAxis: {
        range: [0, 1]
    },
    style:{fill:'red'}
};
const Week = () => {
    return (
        <div>
            <Line {...config} />
        </div>
    )
}

export default Week;