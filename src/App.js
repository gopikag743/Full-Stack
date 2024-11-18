import React from 'react'
import Screen1 from './Components/screen1';
import Login from './Components/login'; 
import Signup from './Components/signup'; 
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
// import { Routes,Route } from 'react-router-dom';
// import React from 'react';
// import Header from './Components/Header';
// import JobList from './Components/JobList';
// import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Screen1/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </Router>
    {/* <Header />
      <JobList />
      <Footer /> */}
    {/* <Screen1/> */}
    {/* <Login/> */}
    {/* <Signup/> */}

    </>

  )
}

export default App
