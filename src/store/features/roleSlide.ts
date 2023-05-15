import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddRoleType } from "../../type/types";
import { AddRole } from "../../firebase/controller";
import { UpdateRole } from "../../firebase/controller";

const initialState: AddRoleType = {
    chucNang:[""],
    moTa:"",
    soNguoiDung:0,
    tenVaiTro:""
}
export const RoleSlide = createSlice({
    name:"role",
    initialState,
    reducers:{
        ADD_ROLE:(state,actions:PayloadAction<{role:AddRoleType}>)=>{
            state = actions.payload.role;
            AddRole(state);
        },
        UPDATE_ROLE:(state,actions:PayloadAction<{key:string,role:AddRoleType}>)=>{
            state = actions.payload.role;
            UpdateRole(actions.payload.key,state);
        }
    }
})
export default RoleSlide.reducer;
export const {ADD_ROLE,UPDATE_ROLE} = RoleSlide.actions;