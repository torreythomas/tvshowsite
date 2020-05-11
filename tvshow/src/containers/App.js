import React from 'react';
import './App.css';
import Home from '../components/Home/Home';
import Shows from '../components/Shows/Shows';
import Footer from '../components/Footer';
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/"> 
      <h1> Home </h1>
      </Link>
          <Link to="/shows">
            <h1>Shows</h1>
          </Link>
          
      </nav>
      <main>

      <Route path="/" exact component={Home} />
      <Route path="/shows" component={Shows} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
