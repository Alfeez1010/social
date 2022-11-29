import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/login';
import Signup from './components/signup';
import ResetPassword from './components/resetPassword/ResetPassword';
import Otp from './components/resetPassword/Otp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route exact path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
