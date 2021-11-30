import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header';
import HomePage from './app/screens/HomePage';

function App() {
  return (
    <div className="App">
     <Header />
     <HomePage/>
       
    </div>
  );
}

export default App;
