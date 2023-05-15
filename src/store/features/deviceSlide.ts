import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddDeviceType } from "../../type/types";
import { AddDevice, UpdateDevice } from "../../firebase/controller";

const initialState: AddDeviceType = {
    maThietBi: "",
    tenThietBi: "",
    dichVuSuDung: [""],
    diaChiIP: "",
    loaiThietBi: "",
    tenDangNhap: "",
    matKhau: "",
    trangThaiHoatDong: "Hoạt động",
    trangThaiKetNoi: "Kết nối"
}
export const DeviceSlide = createSlice({
    name: "device",
    initialState,
    reducers: {
        ADD_DEVICE: (state, actions: PayloadAction<{ device: AddDeviceType }>) => {
            actions.payload.device.trangThaiHoatDong = "Hoạt động";
            actions.payload.device.trangThaiKetNoi = "Kết nối";
            state = actions.payload.device;
            AddDevice(state);
        },
        UPDATE_DEVICE: (state, actions: PayloadAction<{ key: string, device: AddDeviceType }>) => {
            actions.payload.device.trangThaiHoatDong = "Hoạt động";
            actions.payload.device.trangThaiKetNoi = "Kết nối";
            state = actions.payload.device;
            UpdateDevice(actions.payload.key, state);
        }
    }
})
export default DeviceSlide.reducer;
export const { ADD_DEVICE, UPDATE_DEVICE } = DeviceSlide.actions;