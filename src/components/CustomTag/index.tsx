import React from 'react'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import { Tag } from 'antd'

const TagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }
    return (
        <Tag
            color={'orange'}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{margin: 5,padding:5}}>
            {label}
        </Tag>
    )
}

export default TagRender