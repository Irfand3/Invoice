import React,{useState, useEffect} from 'react'
import './login.css'
import { useHistory } from "react-router-dom";
import googleButton from '../../assets/googleButton.png'
import { loginUser } from './modules/actions';


const Login = (props) => {
    const {actions, loginUser} = props
    
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {
        //if user is already logged in, redirect to home page
        if(user){
            history.push('/invoices')
        }
    });

    const handleLogin = (e) => {
        e.preventDefault()
       try {
        const user = {
            email:loginEmail,
            password:loginPassword
        }
        actions.loginUser(user)
       } catch (error) {
           console.log(error)
       }
    }

    return (
        <div>
            <div className="background-image" align="center">
            {loginUser.error && <div className="alert alert-danger">{loginUser.error}</div>}
            <div className="Rectangle centered">
            <div className="container">
            <div class="Log-in-to-ACCOUNT">
                Log in to ACCOUNT
            </div>
            <div className="Email">
                Email
            </div>
            
            <form onSubmit={handleLogin}>
                <input type="text" name="email" className="EmailInput" placeholder="Unesite Email" onChange={ e => setLoginEmail(e.target.value)}/>
                <div className="Password">
                Password
                </div>
                <input type="password" name="password" className="InputPassword" placeholder="Input Password" onChange={ e => setLoginPassword(e.target.value)}/>
                <br></br>
                <div style={{marginTop:"15.5px"}}>
                <input type="checkbox" id="savePassword" name="savePassword" value="No" />
                <label htmlFor="savePassword" className="keepMeLoggedIn">Keep me logged in</label>
                </div>
                <button className="loginButton">Login</button>
                <button className="googleLogin"><img src={googleButton} className="googleLoginImg"/><span className="googleLoginText">Use Google account</span></button>
                
            </form>
            </div> 
            </div>
            </div>
        </div>
    )
}

export default Login
