import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import "../login/login.css"

const Register = (props) => {

    const {actions, registerUser} = props
    console.log(registerUser)
    const history = useHistory()
    const [userToRegisterName, setUserToRegisterName] = useState('')
    const [userToRegisterEmail, setUserToRegisterEmail] = useState('')
    const [userToRegisterPassword, setUserToRegisterPassword] = useState('')
    

    const user = JSON.parse(localStorage.getItem("userInfo"))
    
    useEffect(() => {
        if(user){
            history.push('/invoices')
        }
    });

    
    const handleRegister = (e) => {

        e.preventDefault()
        let isValid = false
        if (userToRegisterEmail === '' || userToRegisterName === '' || userToRegisterPassword === '') {
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (pattern.test(userToRegisterEmail)) {
              isValid = true;
              try {
                const user = {
                    email:userToRegisterEmail,
                    name:userToRegisterName,
                    password:userToRegisterPassword
                }
                actions.registerUser(user)
                
            }
            catch (error) {
                console.log(error)            
            } 
        }
        else
        {
            alert("Invalid fields")
        }
        
    }

    return (
        <div>
        <div className="background-image" align="center">
        {registerUser.error && <div className="alert alert-danger">{registerUser.error}</div>}
        <div className="Rectangle centered">
        <div className="container">
        <div className="Log-in-to-ACCOUNT">
            Register Account
        </div>
        <form onSubmit={handleRegister}>
        <div className="Email">

            Ime
            </div>
            <input type="text" name="name" className="EmailInput" placeholder="Unesite Ime" onChange={ e => setUserToRegisterName(e.target.value)}/>
            <div className="Email">
            Email
            </div>
            <input type="text" name="email" className="EmailInput" placeholder="Unesite Email" onChange={ e => setUserToRegisterEmail(e.target.value)}/>
            <div className="Password">
            Password
            </div>
            <input type="password" name="password" className="InputPassword" placeholder="Input Password" onChange={ e => setUserToRegisterPassword(e.target.value)}/>
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
