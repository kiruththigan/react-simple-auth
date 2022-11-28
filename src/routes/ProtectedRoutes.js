import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const ProtectedRoutes = ({ children }) => {
    const auth = useAuth()
    const user = useSelector(state => state.user.value)
    let loginStatus = localStorage.getItem('loginStatus')

    if (!user.loggedIn) {
        return <Navigate to='/' />
    }

    return children
}
