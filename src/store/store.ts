import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook,useDispatch,useSelector } from 'react-redux'
import { AccountSlice } from './features/accountSlice';
import { DeviceSlide } from './features/deviceSlide';
import { ServiceSlide } from './features/serviceSlide';
import { RoleSlide } from './features/roleSlide';

export const store = configureStore({
    reducer:{
        account:AccountSlice.reducer,
        device:DeviceSlide.reducer,
        service:ServiceSlide.reducer,
        role:RoleSlide.reducer,
    }
})
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;