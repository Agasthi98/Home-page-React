import React from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Nav1 from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer'



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Homepage />
        

      </div>
      <Footer />
    </Router>
  );
}

export default App;
