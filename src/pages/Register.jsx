import React, { useState } from 'react'

function Register() {
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
   

  async function register(e){
        e.preventDefault();
   const response=await fetch('http://localhost:4000/register',{
          method:'POST',
          body:JSON.stringify({username,email,password}),
          headers:{'Content-Type':'application/json'},
      
        })
        if(response.status===200){
          alert('Registration succesful');
        }else{
          alert('Registration failed');
        }
    }
  return (
    <form className='signUp' onSubmit={register}>
        <h1>Register now</h1>
    <input type='text'
     placeholder='username'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}/>
    <input type='email' 
    placeholder='email'
    value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password'
     placeholder='password'
     value={password}
      onChange={(e)=>setPassword(e.target.value)}/>
     <button type='submit'>Sing Up</button>
   </form>
  )
}

export default Register