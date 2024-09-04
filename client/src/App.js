import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import './designs/css/App.css';
import Loginpage from "./Pages/Loginpage/Loginpage";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

 export default function App() {
  return (
    <div>
      <Header />
            
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='Login' element={<Loginpage/>} />
                
            </Routes>
            <Footer />
            
        </div>
    )  
}