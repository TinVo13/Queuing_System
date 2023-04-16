import React from 'react';
import './App.css';
import SideMenu from './components/Sidebar/SideMenu'
import Topbar from './components/Sidebar/Topbar';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className='App'>
      <SideMenu />
      <div className='SideMenuAndPageContent'>
        <Topbar />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
