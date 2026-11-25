import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmial] = useState("");
    const [studentId, setStudentId]=useState("");

    const [hasAccount, setHasAnAccount]  = useState(true);

    function loginCheck(){
        alert("You have successfully logged in using user name which is "+userName+" and password is "+password);
    }
    function navigateBetweenLoginAndSignUp(){
      setHasAnAccount(!hasAccount)
    }
  
  return (
    <>
    { hasAccount ? (
    <div style={{border:"3px solid indigo", marginTop:"200px"}}>
        <div><h1>Sign In</h1></div>
        <label>UserName:</label><input type='text'
         placeholder='Enter your username'
         onChange={e=>setUserName(e.target.value)} /><br/>
        <label>Password:</label><input type='password'  
        onChange={e=>setPassword(e.target.value)} /><br/>
        <div><LibraryButton buttonLabel="LOGIN" 
        buttonAction={loginCheck}/></div> 
        <LibraryButton buttonAction={navigateBetweenLoginAndSignUp} buttonLabel="Don't you have an account?"/>
    </div>
    ) : (
     <div style={{border:"3px solid darkBlue", marginTop:"200px"}}>
        <div><h1>Sign Up</h1></div>
        <label>Student ID:</label><input type='text'
         placeholder='Enter your student ID'
         onChange={e=>setStudentId(e.target.value)} /><br/>
        <label>Email:</label><input type='email'  
        onChange={e=>setEmial(e.target.value)} /><br/>
        <label>Password:</label><input type='password'  
        onChange={e=>setPassword(e.target.value)} /><br/>
        <div><LibraryButton buttonLabel="Create Account" 
        buttonAction={loginCheck}/></div>
                <LibraryButton buttonAction={navigateBetweenLoginAndSignUp} buttonLabel="Already have an account?"/>
    </div>
    )
}
    </>
  )
}

export default LibraryLogin