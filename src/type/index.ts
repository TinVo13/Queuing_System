export interface DeviceType {
    key: number;
    mathietbi: string;
    tenthietbi: string;
    diachiip: string;
    trangthaihoatdong: string;
    trangthaiketnoi: string;
    dichvusudung: string;
}
export interface UpdateDeviceType {
    maThietBi: string,
    tenThietBi: string,
    loaiThietBi: string,
    tenDangNhap: string,
    matKhau: string,
    diaChiIP: string,
    dichVu: string[]
}
export interface ServiceType {
    key: number,
    maDichVu: string,
    tenDichVu: string,
    moTa: string,
    trangThaiHoatDong: string,
}
export interface DetailServiceType {
    key: number,
    soThuTu: string,
    trangThai: string
}
export interface UpdateServiceType {
    maDichVu: string,
    tenDichVu: string,
}
export interface NumberingType{
    key: number,
    stt: number,
    tenKhachHang: string,
    tenDichVu: string,
    thoiGianCap: string,
    hanSuDung: string,
    trangThai: string,
    nguonCap: string
}