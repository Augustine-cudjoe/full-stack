
import React, { useContext, useState } from 'react'
import {Navigate} from 'react-router-dom'
import { UserContext } from '../UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
 const [username,setUserName]=useState('');
 const [password,setPassword]=useState('');
 const [redirect,setRedirect]=useState(false);
 const {setUserInfo}=useContext(UserContext);

 
 const notify = () => {
  toast.success("Success Notification !", {
    position: "top-right",
    
  });



 
};


 async function login(e){
   e.preventDefault();

 const response =await fetch('http://localhost:4000/login',{
   method:'POST',
   body:JSON.stringify({username,password}),
  headers:{'Content-Type':'application/json'},
  credentials:'include',
  
   })
   if(response.status===200){
    
    response.json().then(userInfo=>{
      setUserInfo(userInfo)
      setRedirect(true)
    })
    notify ();
  }else{
     alert('Wrong credentials');
   
  }
 }
 if(redirect){
  return <Navigate to={'/'} />
 }
  return (
    <form className='login' onSubmit={login}>
     
         <h1>Login </h1>
       <input type='text'
        placeholder='username' 
        value={username} 
        onChange={(e)=>setUserName(e.target.value)}/>
       <input type='password'
        placeholder='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
           <ToastContainer limit={1}/>
        <button type='submit'  onClick={notify()}>Submit</button>
    </form>
  )
}

export default Login