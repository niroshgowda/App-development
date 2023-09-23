import './App.css'

import Signup from './Signup'
 import Login from './Login'
import Home from './Home';
import Adminlogin from './Adminlogin';
import Dashboard from './Dashboard';
import Gallery from './Account'
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
import Profile from './Profile';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Feedback from './Feedback';

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
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/analyses' element={<Analyses/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile1' element={<Profile1/>}/>
            <Route path='/profile2' element={<Profile2/>}/>
            <Route path='/profile3' element={<Profile3/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
