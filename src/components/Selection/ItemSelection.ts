import { Options } from "../../type";

export const SelectionService: Options[] = [
    { label: 'Tất cả', value: 'tất cả' },
    { label: 'Khám tim mạch', value: 'khám tim mạch' },
    { label: 'Khám sản - Phụ khoa', value: 'khám sản - phụ khoa' },
    { label: 'Khám răng hàm mặt', value: 'khám răng hàm mặt' },
    { label: 'Khám tai mũi họng', value: 'khám tai mũi họng' },
    { label: 'Khám hô hấp', value: 'khám hô hấp' },
    { label: 'Khám tổng quát', value: 'khám tổng quát' }
]
export const SelectionStatus: Options[] = [
    {
        label:'Tất cả',
        value: 'tất cả'
    },
    {
        label:'Đang chờ',
        value: 'đang chờ'
    },
    {
        label:'Đã sử dụng',
        value: 'đã sử dụng'
    },
    {
        label:'Bỏ qua',
        value: 'bỏ qua'
    },
]
export const SelectionRole: Options[] = [
    {
        label:'Tất cả',
        value:''
    },
    {
        label:'Kế toán',
        value:'kế toán'
    },
    {
        label:'Bác sĩ',
        value:'bác sĩ'
    },
    {
        label: 'Lễ tân',
        value:'lễ tân'
    },
    {
        label:'Quản lý',
        value:'quản lý'
    },
    {
        label:'Admin',
        value:'admin'
    },
    {
        label:'Superadmin',
        value:'superadmin'
    }
]
export const Status:Options[] = [
    {
        label:'Tất cả',
        value:''
    },
    {
        label:'Ngưng hoạt động',
        value:'ngưng hoạt động'
    },
    {
        label:'Hoạt động',
        value:'hoạt động'
    }
]