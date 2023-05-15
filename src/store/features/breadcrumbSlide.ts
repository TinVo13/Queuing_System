import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BreadcrumbType } from "../../type/types"
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";


interface initialStateType {
    itemList:BreadcrumbType[]
};
const itemList: BreadcrumbType[] = [{
    title:"Dashboard",
    href:"/dashboard"
}];
const initialState: initialStateType = {
    itemList
};
export const BreadCrumbSlide = createSlice({
    name:"breadcrumb",
    initialState,
    reducers:{
        UPDATE_BREADCRUMB:(state,actions:PayloadAction<BreadcrumbType>)=>{
            state.itemList.push(actions.payload);
        }
    }
});
export default BreadCrumbSlide.reducer;
export const {UPDATE_BREADCRUMB} = BreadCrumbSlide.actions;