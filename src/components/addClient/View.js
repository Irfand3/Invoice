import React, {useState, useEffect} from 'react'
import Navbar from "../navbar"
import "./addClient.css"
import nextId from "react-id-generator";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";

const AddClient = (props) => {
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const {actions} = props
    const [clientName, setClientName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [dueTo, setDueTo] = useState("")
    const [notes, setNotes] = useState("")
    const [user, setUser] = useState(userInfo)
    
    const history = useHistory()

    useEffect(() => {
        if(!user){
            history.push('/login')
        }
    });

    const onSave = () => {
        try {
            if(clientName !== "" && companyName !== "" && notes !== "")
            {
            const newClient = {
                id:nextId(),
                name:clientName,
                company:companyName,
                notes:notes,
                dueTo:dueTo,
                companyId:nextId(),
                totalAmount:0,
                userEmail:user.email
            }

            actions.saveClient(newClient)
            window.location.reload()
        }
        else alert("Fill in fields")
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <div style={{display:"flex", backgroundColor:"#f9f9f9"}}>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="contentContainer">
            
            
            <div style={{display:"flex", marginTop:"30px", marginBottom:"70px"}} className="contentContainer">
                 <span className="invoicesHeader">ADD client</span>
                 <div className="vertical"></div>
                 <i className="fa fa-angle-double-right" style={{lineHeight:"34px"}} aria-hidden="true"></i>
                 <div className="InvoicesActive">Add client</div>
             </div>
                <div className="card contentContainer">
                    <div className="contentContainer" >
                    <br></br>
                    <div className="addClientHeading" >Add a new CLIENT</div>
                    <div className="addClientSubheading">Add new  client to <strong>existing</strong> list</div>
                    

                    <div className="row">
                        <div className="col">
                            <div className="formHeadings">Assign to new client</div>
                            <input className="addClientInput" placeholder="Enter client name" onChange={(e)=>setClientName(e.target.value)}></input>
                            <div className="formHeadings" style={{marginTop:"22px"}}>Company name</div>
                            <input className="addClientInput" placeholder="Enter company name" onChange={(e)=>setCompanyName(e.target.value)}></input>
                            <div className="formHeadings" style={{marginTop:"22px"}}>Due to pay by</div>
                            <DatePicker  className="addClientInput" 
                            onChange={(date)=> setDueTo(date)} 
                            dateFormat="MM/dd/yyyy"
                            selected={dueTo}
                            minDate={new Date()}
                            ></DatePicker>
                        </div>
                        <div className="col" >
                            
                            <div className="formHeadings">Add notes and remarks</div>
                            <input className="addNotesInput" onChange={(e)=>setNotes(e.target.value)} ></input>
                            <button className="saveButton formHeadings" style={{color:"white"}} onClick={onSave}>SAVE Client</button>
                            
                        </div>
                        
                    </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default AddClient
