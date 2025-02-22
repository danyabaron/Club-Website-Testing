import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* load navbar */}
      <Navbar />
      {/* load home page */}
      <Home />
    </div>
  );
}

export default App;
