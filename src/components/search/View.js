import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import plusCircle from "../../assets/plusCircle.png"
import "./search.css"

const Search = (props) => {
    
    const {actions} = props

    const user = JSON.parse(localStorage.getItem("userInfo"))
    const location = useLocation()
    const [searchValue, setSearchValue] = useState("")
    
   

    const handleSearch = (e) => {
        //check path of router, search clients or invoices based on it
        e.preventDefault()
        if (location.pathname === "/invoices")
        {
        console.log("from home")
        actions.searchInvoice(searchValue)
        
        }
        else if (location.pathname === "/clients")
        {
        console.log("from clients")
        actions.searchClient(searchValue)
        }
    }
    return (
        <div>   
        <form onSubmit={handleSearch}>
        <div className="searchContainer" style={{marginTop:"30px"}}>
            <div className="inputGroup">
            <div style={{width:"80%"}} ><input className="input"  onChange={ (e) => setSearchValue(e.target.value)} style={{fontFamily:"Montserrat", fontSize:"16px", paddingLeft:"15px"}}></input></div>
            <div style={{width:"5%", textAlign:"right", paddingRight:"43px",paddingLeft:"20px"}}><img src={plusCircle}></img></div>
           {user && <div style={{width:"10%"}} className="text">{user.email}</div>}
           {user && <div style={{width:"5%", textAlign:"right"}}> <span className="charCircle">{user.email.substring(0,2).toUpperCase()}</span></div>}
            </div>
        </div>
      
        </form>
    </div>
    )
}

export default Search
