import React, {useState, useEffect} from 'react'
import nextId from 'react-id-generator'
import Navbar from "../navbar"
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./addInvoice.css"
import "../addClient/addClient.css"

const AddInvoice = (props) => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
    const {actions, clients} = props

    const existingClients = clients.map(client => <option value={client.name} key={client.name}>{client.name}</option>  )

    const [existingClient, setExistingClient] = useState("")
    const [dueToExisting, setDueToExisting] = useState("")
    const [amountExisting, setAmountExisting] = useState("")
    const [currency, setCurrency] = useState("")
    const [newClient, setNewClient] = useState("")
    const [company, setCompany] = useState("")
    const [dueTo, setDueTo] = useState("")
    const [amountNew, setAmountNew] = useState("")
    const [newCurrency, setNewCurrency] = useState("")
    const [checked, setChecked] = useState(false)
    const [user, setUser] = useState(userInfo)
    
    const history = useHistory()

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }
    });

    const submitForm = (e) => {
        e.preventDefault()

        //CREATE INVOICE FOR EXISTING CLIENT
        if (existingClient !== "" || dueToExisting !== "" || amountExisting !== "" || currency !== "")
        {
            let existingClientInfo
            clients.forEach(client => {
                if (client.name === existingClient)
                {
                    existingClientInfo = client
                }
            });
            
            try {
                const newInvoice = {
                    client: existingClientInfo.name,
                    dueTo: dueToExisting,
                    amount: amountExisting,
                    company: existingClientInfo.company,
                    companyId: existingClientInfo.companyId,
                    currency: newCurrency,
                    paidStatus:checked,
                    userEmail:user.email
                }
                console.log(newInvoice)
                actions.createNewInvoice(newInvoice)
                if(newInvoice.paidStatus === false)
                {actions.setClientTotalAmount(newInvoice.amount, existingClientInfo)}
                window.location.reload()
                
            } catch (error) {
                console.log(error)
            } 
        }
        //CREATE NEW CLIENT AND INVOICE
        else if(newClient !== "" || company !== "" || dueTo !== "" || amountNew !== "" || newCurrency !== "")
        {
            try {
                const client = {
                    name: newClient,
                    company: company,
                    dueTo: dueTo,
                    notes:"",
                    companyId:nextId(),
                    id:nextId(),
                    totalAmount: !checked ? amountNew : 0,
                    userEmail:user.email
                }
                const invoice = {
                    client: client.name,
                    company: client.company,
                    dueTo: client.dueTo,
                    currency: currency,
                    amount: amountNew,
                    paidStatus:checked,
                    companyId:client.companyId,
                    userEmail:user.email
                }
                actions.saveClient(client)
                actions.createNewInvoice(invoice)
                window.location.reload()
                console.log(client)
                console.log(invoice)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <div className="flex-container">
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{width:"100%", backgroundColor:"#f9f9f9"}}>
                
                
                <div style={{display:"flex", marginTop:"30px", marginBottom:"70px"}} className="contentContainer">
                 <span className="invoicesHeader">ADD Invoice</span>
                 <div className="vertical"></div>
                 <i className="fa fa-angle-double-right" style={{lineHeight:"34px"}} aria-hidden="true"></i>
                 <div className="InvoicesActive">Add Invoice</div>
             </div>
             <div className="addInvoiceCard panelContainer">

             <form onSubmit={submitForm}> 
             <div className="row">
                 
                 <div className="col">
                    <div className="panelContainer">
                    <div className="addClientHeading" style={{marginTop:"20px"}}>Add a New INVOICE</div>
                    <div className="addClientSubheading">Add Invoice for existing client</div>
                    <div className="formHeadings" style={{marginTop:"20px"}}>Assigned to existing client</div>
                   
                   <select className="addClientInput" 
                   disabled={newClient !== "" || dueTo !== "" || amountNew !== "" || company !== "" || newCurrency !== "" ? true : false}
                   onChange={(e)=>setExistingClient(e.target.value)} style={{fontWeight:"500", backgroundColor:"white"}}>
                       <option></option>
                       {existingClients}
                   </select>
                  
                    
                    <div className="formHeadings" style={{marginTop:"20px"}}>Due to pay by</div>
                    
                    <DatePicker  className="addClientInput" 
                    disabled={newClient !== "" || dueTo !== "" || amountNew !== "" || company !== "" || newCurrency !== "" ? true : false}
                    onChange={(date)=> setDueToExisting(date)} 
                    dateFormat="MM/dd/yyyy"
                    selected={dueToExisting}
                    minDate={new Date()}
                    ></DatePicker>
                    <div className="flex-container" style={{marginTop:"20px"}}>
                        <div className="w-50">
                            <div className="formHeadings ">Amount to pay</div>
                            <input className="addClientInput"
                            disabled={newClient !== "" || dueTo !== "" || amountNew !== "" || company !== "" || newCurrency !== "" ? true : false}
                            onChange={(e)=> setAmountExisting(e.target.value)}></input>
                         </div>
                        <div className="w-50">
                            <div className="formHeadings">Currency</div>
                            <select className="addClientInput" style={{backgroundColor:"white"}}
                            disabled={newClient !== "" || dueTo !== "" || amountNew !== "" || company !== "" || newCurrency !== "" ? true : false}
                            value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                <option value=""></option>
                                <option value="$">$</option>
                                <option value="€">€</option>
                                <option value="KM">KM</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    
                 </div>
                 
                 
                 <div className="col">
                 
                     <div className="container">
                    <div className="addClientHeading" style={{visibility:"hidden", marginTop:"20px"}}>Add a New Invoice</div>
                    <div className="addClientSubheading">Add Invoice for new client</div>
                    <div className="formHeadings" style={{marginTop:"20px"}}>Assigned to new client</div>
                    <input 
                    className="addClientInput"
                    disabled={existingClient !== "" || dueToExisting !== "" || amountExisting !== "" ? true : false}
                    onChange={(e) => setNewClient(e.target.value)}>
                    </input>
                    <div className="formHeadings" style={{marginTop:"20px"}}>Company name</div>
                    <input className="addClientInput"  
                    disabled={existingClient !== "" || dueToExisting !== "" || amountExisting !== "" ? true : false}
                    onChange={(e) => setCompany(e.target.value)}></input>
                    <div className="formHeadings" style={{marginTop:"20px"}}>Due to pay by</div>
                    <DatePicker className="addClientInput"  
                    disabled={existingClient !== "" || dueToExisting !== "" || amountExisting !== "" ? true : false}
                    onChange={(date) => setDueTo(date)}  selected={dueTo} minDate={new Date()}>
                   
                    </DatePicker>
                    <div className="flex-container" style={{marginTop:"20px"}}>
                        <div>
                            <div className="formHeadings">Amount to pay</div>
                            <input className="addClientInput" 
                            disabled={existingClient !== "" || dueToExisting !== "" || amountExisting !== "" ? true : false}
                            onChange={(e) => setAmountNew(e.target.value)}></input>
                         </div>
                        <div >
                            <div className="formHeadings">Currency</div>
                            <select className="addClientInput" style={{backgroundColor:"white"}}
                            disabled={existingClient !== "" || dueToExisting !== "" || amountExisting !== "" ? true : false}
                            value={newCurrency} onChange={(e) => setNewCurrency(e.target.value)}>
                                <option value=""></option>
                                <option value="$">$</option>
                                <option value="€">€</option>
                                <option value="KM">KM</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="flex-container" style={{justifyContent:"space-evenly", alignItems:"center", }}>
                        <div>
                        
                         <input type="checkbox"
                         onChange = {()=> setChecked(!checked)}
                         value={checked}
                         name="paidStatus"/>
                         <label htmlFor="paidStatus" style={{marginLeft:"5px"}}>Mark invoice as paid</label>
                        </div>
                        <div>
                    <input type="submit" value="Save client" className="saveInvoice formHeadings" style={{color:"white", marginTop:"20px"}}/>
                    </div>
                    </div>
                    </div>
                 </div>
                
             </div>

             </form>
             </div>
            </div>
        </div>

        
        </div>
    )
}

export default AddInvoice
