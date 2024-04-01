import React from 'react';
import Login from "../src/pages/Login/Login";
import Signup from './pages/Signup/Signup';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter basename='/telesign-webportal'>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
