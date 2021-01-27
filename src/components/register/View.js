import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import "../login/login.css"
import {useForm} from "react-hook-form"
import {notification} from "antd"

const Register = (props) => {

    const {actions, registerUser} = props
    const history = useHistory()
    
    const {register, errors, handleSubmit} = useForm()

    const user = JSON.parse(localStorage.getItem("userInfo"))
    
    useEffect(() => {
        if(user){
            history.push('/invoices')
        }
    },[]);

    const onSubmit = (data) => {
        actions.registerUser(data)
    }
    

    return (
        <div>
        <div className="background-image" align="center">
       
        <div className="Rectangle centered">
        <div className="container">
        <div className="Log-in-to-ACCOUNT">
            Register Account
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Email">

            Ime
            </div>
            <input type="text" name="name" className="EmailInput" placeholder="Unesite Ime" 
            ref={ register({required: true })} />
            {errors.name && notification.error({
            message:"Register User Fail",
            description:"Name field is required!"
            })}
            <div className="Email">
            Email
            </div>
            <input type="text" name="email" className="EmailInput" placeholder="Unesite Email"
            ref={ register({required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} />
             {errors.email && notification.error({
            message:"Register User Fail",
            description:"Email field is required or invalid!"
            })}
            <div className="Password">
            Password
            </div>
            <input type="password" name="password" className="InputPassword" placeholder="Input Password"
            ref={ register({required: true })}/>
             {errors.password && notification.error({
            message:"Register User Fail",
            description:"Password field is required!"
            })}
            <br></br>
            <div style={{marginTop:"10px"}}>
            </div>
            <button className="loginButton">Register</button>
        </form>
        </div> 
        </div>
        </div>
    </div>

        
    )
}

export default Register
