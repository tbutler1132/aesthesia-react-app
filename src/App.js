import React from 'react';
import './App.css';
import TopNav from './features/nav/TopNav';
import { Outlet } from 'react-router-dom';
import { theme } from './app/themeSlice'
import { useSelector } from 'react-redux';

function App() {
  const currentTheme = useSelector(theme)
  return (
    <div data-mode={currentTheme} className="App">
      <TopNav/>
      <Outlet />
    </div>
  );
}

export default App;
