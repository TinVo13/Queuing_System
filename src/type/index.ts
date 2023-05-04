export interface DeviceType {
    key: number;
    maThietBi: string;
    tenThietBi: string;
    diaChiIP: string;
    trangThaiHoatDong: string;
    trangThaiKetNoi: string;
    dichVuSuDung: string;
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
export interface NumberingType {
    key: number,
    stt: number,
    tenKhachHang: string,
    tenDichVu: string,
    thoiGianCap: string,
    hanSuDung: string,
    trangThai: string,
    nguonCap: string
}
export interface ReportType {
    key: number,
    stt: number,
    tenDichVu: string,
    thoiGianCap: string,
    tinhTrang: string,
    nguonCap: string
}
export interface Options {
    label: string,
    value: string
}
export interface RoleType {
    key: number,
    tenVaiTro: string,
    soNguoiDung: number,
    moTa: string
}
export interface AccountType {
    key: number,
    tenDangNhap: string,
    hoTen: string,
    soDienThoai: string,
    email: string,
    vaiTro: string,
    trangThaiHoatDong: string
}
export interface UserLogType{
    key:number,
    tenDangNhap:string,
    thoiGianTacDong:string,
    ipThucHien:string,
    thaoTacThucHien:string
}