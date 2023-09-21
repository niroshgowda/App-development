import React,{ useState } from 'react'
import './Signup.css'

function Signup() {
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState("");
  const[username,setusername]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[phoneno,setphoneno]=useState("");
  const sendtodb=(e)=>{
    e.preventDefault()
    const details={firstname,lastname,username,email,phoneno,password}
    if(firstname.length===0||lastname.length===0||username.length===0||email.length===0||phoneno.length===0||password.length===0){
      alert("Enter All fields")
    }
    if(firstname.length===0)
    {
      alert("Enter first name")
    }
    if(lastname.length===0)
    {
      alert("Enter last name")
    }
    if(username.length===0)
    {
      alert("Enter username")
    }
    if(email.length===0)
    {
      alert("Enter email")
    }
    if(phoneno.length===0)
    {
      alert("Enter phone no")
    }
    if(password.length===0)
    {
      alert("Enter password");
    }
  }
  return (
    <div className='immg'>
    <div className="img2">
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form>

       First_Name &nbsp;&nbsp;: <input type="text200" onChange={(e)=>setfirstname(e.target.value)}  placeholder="firstname" /><br/><br/>
      Last_Name  &nbsp;&nbsp; : <input type="text200" onChange={(e)=>setlastname(e.target.value)}   placeholder="laststname" /><br/><br/>

      E-Mail   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300" onChange={(e)=>setemail(e.target.value)}  placeholder="email" /><br/><br/>
       
       Phone_No   &nbsp;&nbsp;&nbsp;
       : <input type="text300" onChange={(e)=>setphoneno (e.target.value)}   placeholder="phone no" /><br/><br/>
       Username  &nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300" onChange={(e)=>setusername(e.target.value)}   placeholder="username" /><br/><br/>
       Password  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="Password400"  onChange={(e)=>setpassword (e.target.value)}  placeholder="password"/><br/><br/>
       
      <br/>
       <button type="submit" class="but2" onClick={sendtodb}>Create Account</button>
       </form>
      </div>
    </div>
    </div>
  )
}

export default Signup