import React from 'react'
import './Signup.css'

function Signup() {


  return (
    <div className='immg'>
    <div className="img2">
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form>

       First_Name &nbsp;&nbsp;: <input type="text200"   placeholder="firstname" /><br/><br/>
      Last_Name  &nbsp;&nbsp; : <input type="text200"    placeholder="laststname" /><br/><br/>

      E-Mail   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"   placeholder="email" /><br/><br/>
       
       Phone_No   &nbsp;&nbsp;&nbsp;
       : <input type="text300"    placeholder="phone no" /><br/><br/>
       Username  &nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"    placeholder="username" /><br/><br/>
       Password  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="Password400"   placeholder="password"/><br/><br/>
       
      <br/>
       <button type="submit" class="but2">Create Account</button>
       </form>
      </div>
    </div>
    </div>
  )
}

export default Signup