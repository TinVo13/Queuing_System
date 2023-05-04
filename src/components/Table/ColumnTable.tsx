import { ColumnsType } from "antd/es/table";
import { ReportType, ServiceType } from "../../type";
import { Badge, Space } from "antd";
import { NavLink } from "react-router-dom";
import { SelectionService, SelectionStatus } from "../Selection/ItemSelection";

export const ColumnTableService: ColumnsType<ServiceType> = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'maDichVu',
        key: 'maDichVu',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tenDichVu',
        key: 'tenDichVu',
    },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'trangThaiHoatDong',
        key: 'trangThaiHoatDong',
        render: (_, record) => (
            <Space>
                {record.trangThaiHoatDong === 'Ngưng hoạt động' ? <Badge status="error" /> : <Badge status="success" />}
                {record.trangThaiHoatDong}
            </Space>
        )
    },
    {
        title: '',
        key: 'chitiet',
        render: () => (
            <Space>
                <NavLink to={'/auth/service/list-service/detail-service'}>Chi tiết</NavLink>
            </Space>
        )
    },
    {
        title: '',
        key: 'capnhat',
        render: () => (
            <Space>
                <NavLink to={'/auth/service/list-service/update-service'}>Cập nhật</NavLink>
            </Space>
        )
    },
]
export const ColumnTableReport: ColumnsType<ReportType> = [
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