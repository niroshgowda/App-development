import './App.css'

import Signup from './Signup'
 import Login from './Login'
import Home from './Home';
// import Adminlogin from './Adminlogin';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Gallery from './Gallery'
import Contact from './Contact'
import Calender from './Calender';
import Logout from './Logout';
import Destination from './Destination';
import Aboutus from './Aboutus';
import React from "react"
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Welcome from './Welcome';


function App() {
  return (
    <div classname="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
