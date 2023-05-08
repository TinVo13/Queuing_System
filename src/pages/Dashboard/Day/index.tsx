import { Line } from '@ant-design/charts';
import React from 'react'

const data = [
    { day: '1', value: 2700 },
    { day: '13', value: 3600 },
    { day: '19', value: 4200 },
    { day: '31', value: 3800 },
];
const config = {
    data,
    autoFit: true,
    xField: 'day',
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
    }
};
const Day = () => {
  return (
    <div>
        <Line {...config}/>
    </div>
  )
}

export default Day