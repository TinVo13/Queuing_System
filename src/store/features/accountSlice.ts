import { createSlice,PayloadAction } from "@reduxjs/toolkit"

export interface Account {
    userName:string,
    password:string
}

interface AccountState {
    accounts: Account,
}

const initialState: AccountState = {
    accounts: {
        userName:"",
        password:""
    }
}
export const AccountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        SetAccount:(state)=>{
            return state;
        },
        AddAccount:(state,actions:PayloadAction<{account:Account}>)=>{
            state.accounts=actions.payload.account;
        }
    }
})

export default AccountSlice.reducer;
export const {AddAccount,SetAccount} = AccountSlice.actions;