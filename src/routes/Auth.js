import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {login,logout} from '../redux/User'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const user = useSelector(state => state.user.value)
    // const [user, setUser] = useState({ user: {} })
    const [loginStatus, setLoginStatus] = useState(false)

    const login = async (loginData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        try {
            await axios.post(
                'https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login',
                loginData,
                config
            ).then((res)=>{
                console.log(res.data);
                dispatch(login({email:loginData.email,loggedIn:true,token:res.data.payload}))
            }).catch((error)=>{
                console.log(error);
            })

            // const { message, payload } = response.data
            // setUser(loginData)
            // setLoginStatus(true)

            // localStorage.setItem('token', payload);
            localStorage.setItem('loginStatus', loginStatus);
            localStorage.setItem('user', JSON.stringify(loginData));

            
        } catch (error) {
            console.log(error.message);
            console.log("Login Fail ! ");
        }

    }

    const logout = () => {
        dispatch(logout())
        // setUser({ user: {} })
        // setLoginStatus(false)
        // localStorage.setItem('loginStatus', user.loggedIn);
        localStorage.removeItem('token');
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loginStatus }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
