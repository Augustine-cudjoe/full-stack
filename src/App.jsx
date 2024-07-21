import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Post from './component/Post'
import Header from './component/Header'
import Layout from './component/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { UserContextProvider } from './UserContext'
function App() {
 
  return (
  
  <UserContextProvider>
     <Routes>
    <Route  path='/' element={<Layout/>}>
    <Route index  element={<Home/>}/>
     <Route path={'/login'} element={<Login/>}/>
     <Route path={'/register'} element={<Register/>}/>
   
    </Route>
    
   </Routes>
  </UserContextProvider>
 
  )
}

export default App
