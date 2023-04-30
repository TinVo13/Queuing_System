import React from 'react'
import { Badge, ConfigProvider, MenuProps, Space, Table } from 'antd';
import { DataReport } from '../../../data';
import { ReportType } from '../../../type';
import { ColumnsType } from 'antd/es/table';
import { SelectionService, SelectionStatus } from '../../Selection/ItemSelection';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Tất cả'
  },
  {
    key: '2',
    label: 'Kiosk'
  },
  {
    key: '3',
    label: 'Hệ thống'
  },
];
const columns: ColumnsType<ReportType> = [
  {
    title: 'Số thứ tự',
    key: 'stt',
    dataIndex: 'stt',
    sorter: (a, b) => a.stt - b.stt,
    sortDirections: ['descend'],
  },
  {
    title: 'Tên dịch vụ',
    key: 'tenDichVu',
    dataIndex: 'tenDichVu',
    filters: [
      ...SelectionService.map((option) => ({
        text: option.label,
        value: option.value,
      }))
    ],
    filterMode: 'tree',
    onFilter: (value, record) => {
      const filters = SelectionService.find((option) => option.value === value);
      const label = filters ? filters.label : "";
      return record.tenDichVu.includes(label)
    },
  },
  {
    title: 'Thời gian cấp',
    key: 'thoiGianCap',
    dataIndex: 'thoiGianCap'
  },
  {
    title: 'Tình trạng',
    key: 'tinhTrang',
    dataIndex: 'tinhTrang',
    filters: [
      ...SelectionStatus.map((option) => ({
        text: option.label,
        value: option.value,
      }))
    ],
    onFilter: (value, record) => {
      const filters = SelectionStatus.find((option) => option.value === value);
      const label = filters ? filters.label : "";
      return record.tinhTrang.includes(label);
    },
    render: (_, record) => (
      <Space>
        {record.tinhTrang === 'Đang chờ' && <Badge status='processing' text={record.tinhTrang} />}
        {record.tinhTrang === 'Đã sử dụng' && <Badge status='default' text={record.tinhTrang} />}
        {record.tinhTrang === 'Bỏ qua' && <Badge status='error' text={record.tinhTrang} />}
      </Space>
    )
  },
  {
    title: 'Nguồn cấp',
    key: 'nguonCap',
    dataIndex: 'nguonCap',
  },
]
const TableReport: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        inherit: false,
        token: {
          colorPrimary: '#FF9138',
          colorBorderSecondary: '#FFE3CD',
        },
        components: {
          Badge: {
            colorPrimary: '#4277FF'
          }
        }
      }}>
      <Table
        size='middle'
        dataSource={DataReport}
        columns={columns}
        pagination={{ pageSize: 10 }}
        rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
        bordered />
    </ConfigProvider>
  )
}

export default TableReport;