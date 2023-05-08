import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    id: string,
    hoTen: string,
    email: string,
    soDienThoai: string,
    role: string[]
}

const initialState: User = {
    id: "",
    hoTen: "",
    email: "",
    soDienThoai: "",
    role: []
}
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, actions: PayloadAction<{ user: User }>) => {
            state.id = actions.payload.user.id;
            state.hoTen = actions.payload.user.hoTen;
            state.email = actions.payload.user.email;
            state.soDienThoai = actions.payload.user.soDienThoai;
            state.role = actions.payload.user.role;
        }
    }
})

export default UserSlice.reducer;
export const { setUser } = UserSlice.actions;