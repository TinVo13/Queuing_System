import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddAccountType } from "../../type/types";
import { AddAccount, UpdateAccount } from "../../firebase/controller";

const initialState: AddAccountType = {
    email: "",
    hoTen: "",
    soDienThoai: "",
    tenDangNhap: "",
    matKhau:"",
    trangThaiHoatDong: "",
    vaiTro: "",
}
export const AccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        ADD_ACCOUNT:(state,actions:PayloadAction<{key:string,account:AddAccountType}>)=>{
            state = actions.payload.account;
            AddAccount(state,actions.payload.key);
        },
        UPDATE_ACCOUNT:(state,actions:PayloadAction<{key:string,account:AddAccountType}>)=>{
            state = actions.payload.account;
            UpdateAccount(actions.payload.key,state);
        }
    }
})

export default AccountSlice.reducer;
export const { ADD_ACCOUNT,UPDATE_ACCOUNT } = AccountSlice.actions;