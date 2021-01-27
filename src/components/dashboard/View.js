import React, { useEffect } from 'react'
import history from '../../history'
import Navbar from '../navbar'

const Dashboard = () => {

    const userInfo = localStorage.getItem('userInfo')
    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }
    }, [])

    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default Dashboard
