import './App.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react'


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;