import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Explore, Login, SignUp, Home, Profile ,BookMarks} from '../pages';
import { useAppSelector } from './hooks';
type privateRouteProps = {
    children:JSX.Element
}
const PrivatRoutes = ({ children }: privateRouteProps) => {
    const { isAuthenticated } = useAppSelector(state => state.auth)
    return isAuthenticated?<>{children}</>:<Navigate to='/' replace/>
}
export const AppRoutes = () => {
    return (<Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<PrivatRoutes><Home /></PrivatRoutes>} />
        <Route path='/explore' element={<PrivatRoutes><Explore /></PrivatRoutes>} />
        <Route path='/profile/:userId' element={<PrivatRoutes><Profile /></PrivatRoutes>} />
        <Route path='/bookmarks' element={<PrivatRoutes><BookMarks/></PrivatRoutes>} />
    </Routes>)
}
