import React, { Fragment } from 'react';
import PageContent from './pages/PageContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import PrivateRoute from './AppRoutes/PrivateRoute';
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


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' Component={PrivateRoute}>
            <Route path='' Component={PageContent}>
              <Route path='/dashboard' Component={Dashboard}></Route>
              <Route path='/device' Component={Device}>
                <Route path='list-device' Component={ListDevice}></Route>
                <Route path='list-device/add-device' Component={AddDevice}></Route>
                <Route path='list-device/detail-device' Component={DetailDevice}></Route>
                <Route path='list-device/update-device' Component={UpdateDevice}></Route>
              </Route>
              <Route path='/service' Component={Service}>
                <Route path='list-service' Component={ListService}></Route>
                <Route path='list-service/add-service' Component={AddService}></Route>
                <Route path='list-service/detail-service' Component={DetailService}></Route>
                <Route path='list-service/update-service' Component={UpdateService}></Route>
              </Route>
              <Route path='/report' Component={Report}></Route>
              <Route path='/userinfo' element={<UserInfo />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
