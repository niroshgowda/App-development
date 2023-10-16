import './App.css'

import Signup from './Signup'
 import Login from './Login'
import Home from './Home';
import Adminlogin from './Adminlogin';
import Dashboard from './Dashboard';
import Contact from './Contact'
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
import Adminprofile from './Adminprofile';
import Gallery from './Gallery';
import Southkorea from './Southkorea';
import Rome from './Rome';
import Paris from './Paris';
import Australia from './Australia'
import Terms_condition from './Terms_condition';
import Privacypolicy from './Privacypolicy';
import Tips from './Tips';



function App() {
  return (
    <div classname="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/adminlogin' element={<Adminlogin/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile1' element={<Profile1/>}/>
            <Route path='/profile2' element={<Profile2/>}/>
            <Route path='/profile3' element={<Profile3/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/adminprofile' element={<Adminprofile/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/southkorea' element={<Southkorea/>}/>
            <Route path='/rome' element={<Rome/>}/>
            <Route path='/paris' element={<Paris/>}/>
            <Route path='/australia' element={<Australia/>}/>
            <Route path='/terms_condition' element={<Terms_condition/>}/>
            <Route path='/privacypolicy' element={<Privacypolicy/>}/>
            <Route path='/tips' element={<Tips/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
