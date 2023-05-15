import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddServiceType } from "../../type/types";
import { AddService, UpdateService } from "../../firebase/controller";

const initialState: AddServiceType = {
    maDichVu: "",
    moTa:"",
    tenDichVu:"",
    trangThaiHoatDong:"Hoạt động"
}
export const ServiceSlide = createSlice({
    name:"service",
    initialState,
    reducers:{
        ADD_SERVICE:(state,actions:PayloadAction<{service:AddServiceType}>)=>{
            actions.payload.service.trangThaiHoatDong = "Hoạt động";
            state = actions.payload.service;
            AddService(state);
        },
        UPDATE_SERVICE:(state,actions:PayloadAction<{key:string,service:AddServiceType}>)=>{
            state = actions.payload.service;
            UpdateService(actions.payload.key,state);
        }
    }
})
export default ServiceSlide.reducer;
export const { ADD_SERVICE,UPDATE_SERVICE } = ServiceSlide.actions;