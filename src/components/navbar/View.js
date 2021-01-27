import React from 'react'
import "./navbar.css"
import plusCircle from "../../assets/plus-circle.png"
import userPin from "../../assets/userPin.png"
import Invoices from "../../assets/Invoices.png"
import {Link, NavLink} from "react-router-dom"

const Navbar = (props) => {

    const {actions} = props

    const OnGetAllInvoices = () => {
        
        actions.getInvoices()
        actions.setCurrentPageInvoice(1)
    }
    const OnGetAllClients = () => {
        actions.getClients()
        actions.setCurrentPage(1)
    }

    return (
        <div>
        <div className="menu">
            <div className="container">
            <div className="title">Ant Finance App</div>
            <Link to="/" style={{textDecoration:"none"}}><button className="dashboardButton"><span style={{color:"black"}}className="addInvoiceClientButtonText">Dashboard</span></button></Link>
            <Link to="/addInvoice" style={{textDecoration:"none"}}><button className="addInvoiceClientButton"><img src={plusCircle} className="plusCircle"></img><span className="addInvoiceClientButtonText">ADD invoice</span></button></Link>
            <Link to="/addClient" style={{textDecoration:"none"}}><button className="addInvoiceClientButton"><img src={plusCircle} className="plusCircle"></img><span className="addInvoiceClientButtonText">ADD new client</span></button></Link>
            
            
            <div className="list">
                <li className="contentTitle">CONTENT</li>
                <NavLink to="/invoices" activeStyle={{color: '#1dcf77'}} style={{textDecoration:"none", color:"#2c2c2c"}} ><li onClick={OnGetAllInvoices} className="listItem"><img src={Invoices} className="userPin"></img>Invoices</li></NavLink>
                <NavLink to="/clients" activeStyle={{color: '#1dcf77'}} style={{textDecoration:"none", color:"#2c2c2c"}} ><li onClick={OnGetAllClients} className="listItem"><img src={userPin} className="userPin"></img>Clients</li></NavLink>
                  
            </div> 
        </div>
        </div>

    </div>
    )
}

export default Navbar
