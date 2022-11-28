import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/Auth'

export default function Dashboard() {
    const auth = useAuth();
    const navigate = useNavigate();
    // let userDetails = JSON.parse(localStorage.getItem('user'))
    const user = useSelector(state => state.user.value)

    const handlerLogout = () => {
        auth.logout()
        navigate('/')
    }
    useEffect(() => {
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <h6>Welcome {user.email}</h6>
            <Button onClick={handlerLogout}>LogOut</Button>
        </div>
    )
}