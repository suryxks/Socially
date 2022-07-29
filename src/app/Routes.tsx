import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Explore } from 'pages/Explore'
import { SignUp } from 'pages/SignUp'
export const AppRoutes = () => {
    return (<Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
    </Routes>)
}