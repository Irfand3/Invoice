import React from 'react'
import "./navbar.css"
import plusCircle from "../../assets/plusCircle.png"
import userPin from "../../assets/user-pin.png"
import {Link} from "react-router-dom"

const Navbar = (props) => {

    const {actions} = props

    const OnGetAllInvoices = () => {
        
        actions.getAllInvoices()
        actions.setCurrentPage(1)
    }
    const OnGetAllClients = () => {
        actions.getAllClients()
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
                <Link to="/invoices" style={{textDecoration:"none", color:"#2c2c2c"}} ><li onClick={OnGetAllInvoices} className="listItem">Invoices</li></Link>
                <Link to="/clients"  style={{textDecoration:"none", color:"#2c2c2c"}} ><li onClick={OnGetAllClients} className="listItem"><img src={userPin} className="userPin"></img>Clients</li></Link>
                  
            </div> 
        </div>
        </div>

    </div>
    )
}

export default Navbar
