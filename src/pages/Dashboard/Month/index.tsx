import { Line } from '@ant-design/charts'
import React from 'react'

const data = [
    { month: '1', value: 2700 },
    { month: '2', value: 3600 },
    { month: '3', value: 4200 },
    { month: '4', value: 3800 },
    { month: '5', value: 3800 },
    { month: '6', value: 6790 },
    { month: '7', value: 4890 },
    { month: '8', value: 5328 },
    { month: '9', value: 3800 },
    { month: '10', value: 3800 },
    { month: '11', value: 6830 },
    { month: '12', value: 2759 },
];
const config = {
    data,
    autoFit: true,
    xField: 'month',
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
const Month = () => {
  return (
    <div>
        <Line {...config}/>
    </div>
  )
}

export default Month