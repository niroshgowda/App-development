import './App.css'

import Signup from './Signup'
 import Login from './Login'
import Home from './Home';
import Adminlogin from './Adminlogin';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Gallery from './Gallery'
import Contact from './Contact'
import Analyses from './Analyses';
import Logout from './Logout';
import Destination from './Destination';
import Aboutus from './Aboutus';
import React from "react"
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Welcome from './Welcome';
import Review from './Review';
import Faq from './Faq';

function App() {
  return (
    <div classname="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/adminlogin' element={<Adminlogin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/analyses' element={<Analyses/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/faq' element={<Faq/>}/>
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
