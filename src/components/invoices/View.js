import React,{useEffect} from 'react'
import Navbar from "../navbar"
import Search from "../search"
import InvoicesPanel from "./invoicesPanel/View"
import { useHistory } from "react-router-dom";
import "../../css/home.css"

const Invoices = (props) => {

    const {actions, invoices, currentPage} = props
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const history = useHistory()

    useEffect(() => {
        //if user is not logged in, redirect to login page
        if(!user){
            history.push('/login')
        }
    });
    
    return (
        <div>
           <div className="flex-container">
                
                  <div>
                  <Navbar/>
                  </div>

               
                  <div style={{width:"100%", backgroundColor:"#f9f9f9"}}>
                     <Search/>
                     <InvoicesPanel invoices={invoices} currentPage={currentPage} actions={actions}/>
                  </div>
                
            </div>
        </div>
    )
}

export default Invoices
