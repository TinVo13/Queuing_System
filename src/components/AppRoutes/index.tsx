import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Device from '../../pages/Device'
import Numbering from '../../pages/Numbering'
import Report from '../../pages/Report'
import Login from '../../pages/Login'
import ForgotPassword from '../../pages/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/device' element={<Device />}></Route>
            <Route path='/numbering' element={<Numbering />}></Route>
            <Route path='/report' element={<Report />}></Route>
            <Route path='/service' element={<Report />}></Route>
            <Route Component={Login} path='/login' />
            <Route Component={ForgotPassword} path='/forgot-password' />
            <Route Component={ResetPassword} path='/reset-password' />
        </Routes>
    )
}

export default AppRoutes