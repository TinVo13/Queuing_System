export interface DeviceType {
    key?:string,
    maThietBi?: string,
    tenThietBi?: string,
    diaChiIP?: string,
    trangThaiHoatDong?: any,
    trangThaiKetNoi?: any,
    dichVuSuDung?: string[],
    tenDangNhap?:string,
    matKhau?:string,
    loaiThietBi?:string
}
export interface AddDeviceType{
    maThietBi: string,
    tenThietBi: string,
    diaChiIP: string,
    loaiThietBi: string,
    trangThaiHoatDong: "Hoạt động",
    trangThaiKetNoi: "Kết nối",
    dichVuSuDung: string[],
    tenDangNhap:string,
    matKhau:string
}
export interface UpdateDeviceType {
    maThietBi: string,
    tenThietBi: string,
    loaiThietBi: string,
    tenDangNhap: string,
    matKhau: string,
    trangThaiHoatDong: "Hoạt động",
    trangThaiKetNoi: "Kết nối",
    diaChiIP: string,
    dichVuSuDung: string[]
}
export interface ServiceType {
    key?: string,
    maDichVu?: string,
    tenDichVu?: string,
    moTa?: string,
    trangThaiHoatDong?: any,
}
export interface AddServiceType {
    maDichVu: string,
    tenDichVu: string,
    moTa: string,
    trangThaiHoatDong: "Hoạt động",
}
export interface DetailServiceType {
    key: number,
    soThuTu: string,
    trangThaiHoatDong: string
}
export interface UpdateServiceType {
    maDichVu: string,
    tenDichVu: string,
    moTa: string,
}
export interface NumberingType {
    key?: string,
    stt?: number,
    tenKhachHang?: string,
    tenDichVu?: string,
    thoiGianCap?: string,
    hanSuDung?: string,
    trangThai?: any,
    nguonCap?: string,
    soDienThoai?: string,
    email?:string
}
export interface AddNumberingType {
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
    key?: string,
    tenVaiTro?: string,
    soNguoiDung?: number,
    moTa?: string,
    chucNang?: string[]
}
export interface AddRoleType {
    tenVaiTro: string,
    soNguoiDung: number,
    moTa: string,
    chucNang: string[]
}
export interface UpdateRoleType {
    tenVaiTro: string,
    soNguoiDung: number,
    moTa: string,
    chucNang: string[]
}
export interface AccountType {
    key?: string,
    tenDangNhap?: string,
    matKhau?:string,
    hoTen?: string,
    soDienThoai?: string,
    email?: string,
    vaiTro?: any,
    trangThaiHoatDong?: any
}
export interface AddAccountType {
    tenDangNhap: string,
    matKhau:string,
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
export interface BreadcrumbType {
    title: string,
    href: string
}