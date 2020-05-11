import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Showcontainer from './showContainer';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Showcontainer/>
      <Footer/>
    </div>
  );
}

export default App;
