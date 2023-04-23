import React, { Fragment } from 'react'
import { List, Divider } from 'antd'

interface datatype {
    notication: string,
    description: string
}
const data: datatype[] = [
    {
        notication: 'Người dùng: Nguyễn Thị Thùy Dung', description: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
    }, {
        notication: 'Người dùng: Nguyễn Thị Thùy Dung', description: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
    },
    {
        notication: 'Người dùng: Nguyễn Thị Thùy Dung', description: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
    },
    {
        notication: 'Người dùng: Nguyễn Thị Thùy Dung', description: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
    },
]
const headerstyle: React.CSSProperties = {
    background:'#FF7506',
}
const Notification: React.FC = () => {
    return (
        <Fragment>
            <List
                size='small'
                dataSource={data}
                itemLayout='horizontal'
                renderItem={(item) => {
                    return (
                        <div>
                            <List.Item.Meta title={item.notication} description={item.description} />
                            <Divider />
                        </div>
                    );
                }} />
        </Fragment>
    )
}

export default Notification