import React from 'react';
import './App.css';
import TopNav from './features/nav/TopNav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div data-mode='dark' className="App">
      <TopNav/>
      <Outlet />
    </div>
  );
}

export default App;
