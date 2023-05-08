import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Account, AccountType } from "../../type/types";

const initialState: AccountType = {
    email: "",
    hoTen: "",
    soDienThoai: "",
    tenDangNhap: "",
    trangThaiHoatDong: "",
    vaiTro: "",
    key:"",
}
export const AccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        SetCurrentAccount: (state, actions: PayloadAction<{ account: Account }>) => {
            state.hoTen = actions.payload.account.hoTen
            state.email = actions.payload.account.email
            state.soDienThoai = actions.payload.account.soDienThoai
            state.tenDangNhap = actions.payload.account.tenDangNhap
            state.trangThaiHoatDong = actions.payload.account.trangThaiHoatDong
            state.vaiTro = actions.payload.account.vaiTro
            state.key = actions.payload.account.key
        }
    }
})

export default AccountSlice.reducer;
export const { SetCurrentAccount } = AccountSlice.actions;