import React, { Fragment } from 'react';
import PageContent from './pages/PageContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import PrivateRoute from './route/PrivateRoute';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Device from './pages/Device';
import Report from './pages/Report';
import Service from './pages/Service';
import UserInfo from './pages/UserInfo/UserInfo';
import ListDevice from './pages/Device/ListDevice/ListDevice';
import AddDevice from './pages/Device/AddDevice';
import DetailDevice from './pages/Device/DetailDevice';
import UpdateDevice from './pages/Device/UpdateDevice';
import ListService from './pages/Service/ListService';
import AddService from './pages/Service/AddService';
import DetailService from './pages/Service/DetailService';
import UpdateService from './pages/Service/UpdateService';
import Numbering from './pages/Numbering';
import ListNumbering from './pages/Numbering/ListNumbering';
import AddNumbering from './pages/Numbering/AddNumbering';
import DetailNumbering from './pages/Numbering/DetailNumbering';
import NumberingWithoutLogin from './pages/Numbering/NumberingWithoutLogin';
import ListRole from './pages/System/Role/ListRole';
import AddRole from './pages/System/Role/AddRole';
import UpdateRole from './pages/System/Role/UpdateRole';
import ListAccount from './pages/System/Account/ListAccount';
import AddAccount from './pages/System/Account/AddAccount';
import UpdateAccount from './pages/System/Account/UpdateAccount';
import SystemSetting from './pages/System';
import UserLog from './pages/System/User';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' Component={PrivateRoute}>
            <Route path='/' Component={PageContent}>
              <Route path='dashboard' Component={Dashboard}></Route>
              <Route path='device' Component={Device}>
                <Route path='list-device' Component={ListDevice}></Route>
                <Route path='list-device/add-device' Component={AddDevice}></Route>
                <Route path='list-device/detail-device' Component={DetailDevice}></Route>
                <Route path='list-device/update-device' Component={UpdateDevice}></Route>
              </Route>
              <Route path='service' Component={Service}>
                <Route path='list-service' Component={ListService}></Route>
                <Route path='list-service/add-service' Component={AddService}></Route>
                <Route path='list-service/detail-service' Component={DetailService}></Route>
                <Route path='list-service/update-service' Component={UpdateService}></Route>
              </Route>
              <Route path='numbering' Component={Numbering}>
                <Route path='list-numbering' Component={ListNumbering}></Route>
                <Route path='list-numbering/add-numbering' Component={AddNumbering}></Route>
                <Route path='list-numbering/detail-numbering' Component={DetailNumbering}></Route>
              </Route>
              <Route path='report' Component={Report}></Route>
              <Route path='system-setting' Component={SystemSetting}>
                <Route path='list-role' Component={ListRole}></Route>
                <Route path='list-role/add-role' Component={AddRole}></Route>
                <Route path='list-role/update-role' Component={UpdateRole}></Route>
                <Route path='list-account' Component={ListAccount}></Route>
                <Route path='list-account/add-account' Component={AddAccount}></Route>
                <Route path='list-account/update-account' Component={UpdateAccount}></Route>
                <Route path='list-userlog' Component={UserLog}></Route>
              </Route>
              <Route path='userinfo' element={<UserInfo />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/numbering' Component={NumberingWithoutLogin}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
