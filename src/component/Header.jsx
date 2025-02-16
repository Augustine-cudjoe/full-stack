
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';


function Header() {
  const {userInfo,setUserInfo}=useContext(UserContext);
  
  useEffect(()=>{
      fetch('http://localhost:4000/profile', {
        credentials:'include',
      }).then(response=>{
        response.json().then(userInfo=>{
          setUserInfo(userInfo);
        })
      })
  },[]);

  function logout(){
     fetch('http://localhost:4000/logout',{
      credentials:true,
      method:'POST',
     });
     setUserInfo(null);
  }

  const username=userInfo?.username;
  console.log(userInfo);

  return (
    <header>
    <Link to="/" className="logo">MyBlog</Link>
   
   <nav className='fixed-top'>
    {
      username && (
        <>
        <Link to='/create'> Create new post</Link>
        <Link onClick={logout}> Logout</Link>
        </>
      )
    }
    {
      !username &&(
        <>
      <Link to='/login'  >Login</Link>
      <Link to='/register'  >Register </Link>
        </>
      )
    }

   </nav>
    </header>
  )
}

export default Header