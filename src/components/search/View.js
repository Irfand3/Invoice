import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import plusCircle from "../../assets/plus-circle.png"
import "./search.css"
import { isEmpty } from 'lodash';

const Search = (props) => {
    
    const {actions, user} = props
    const location = useLocation()
    const [searchValue, setSearchValue] = useState("")
   
   
    const handleSearch = (e) => {
        //check path of router, search clients or invoices based on it
        e.preventDefault()
        if (location.pathname === "/invoices")
        {
        if (searchValue.trim() === "") {
            actions.getInvoices()
        }
        else actions.searchInvoice(searchValue)
        
        }
        else if (location.pathname === "/clients")
        {
            if (searchValue.trim() === "") {
                actions.getClients()
            }
        else actions.searchClient(searchValue)
        }
    }
    return (
        <div>   
        <form onSubmit={handleSearch}>
        <div className="searchContainer" style={{marginTop:"30px"}}>
            <div className="inputGroup">
            <div style={{width:"80%"}} ><input className="input"  onChange={ (e) => setSearchValue(e.target.value)} style={{fontFamily:"Montserrat", fontSize:"16px", paddingLeft:"15px"}}></input></div>
            <div style={{width:"5%", textAlign:"right", paddingRight:"43px",paddingLeft:"20px"}}><img style={{height:"24px", width:"24px"}} src={plusCircle}></img></div>
           {!isEmpty(user) && <div style={{width:"10%"}} className="text">{user.user_email}</div>}
           {!isEmpty(user) &&
            <div style={{width:"5%", textAlign:"right"}} className="dropDown"> 
            <span className="charCircle">{user.user_email.substring(0,2).toUpperCase()}</span>
           
           </div>}
            </div>
        </div>
      
        </form>
    </div>
    )
}

export default Search
