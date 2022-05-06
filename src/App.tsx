import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="main">
      <Header/>
      <Menu/>
    </div>
  );
}

export default App;
