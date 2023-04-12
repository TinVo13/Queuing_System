import React from 'react';
import './App.css';
import Menubar from './components/Sidebar/Menubar';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import UserInfo from './components/UserInfo/UserInfo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route Component={Menubar} path='/' >
            <Route Component={UserInfo} path='/userinfo' />
          </Route>
          <Route Component={Login} path='/login' />
          <Route Component={ForgotPassword} path='/forgot-password' />
          <Route Component={ResetPassword} path='/reset-password' />
        </Routes>
    </div>

  );
}

export default App;
