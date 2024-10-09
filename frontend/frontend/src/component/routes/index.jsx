import React from 'react'
import  {Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import User from '../../pages/user';

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
      
    </div>
  )
}
