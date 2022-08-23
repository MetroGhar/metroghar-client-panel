import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import FilterPage from './Pages/Filter';
import AboutProperty from './Pages/AboutProperty';
import Dashboard from './Pages/Dashboard';
import Axios from 'axios'

// Axios.defaults.baseURL = 'https://backend-metroghar-trial.herokuapp.com/api/v1';
Axios.defaults.baseURL = 'http://3.108.44.184/api/v1';
 
function App() {
  return (
    <HashRouter basename='/'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/search" element={<FilterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property/:id" element={<AboutProperty />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
