import { notification } from 'antd'
import React from 'react'
import {Link} from "react-router-dom"

const ClientDetail = (props) => {

    const {actions,clientDetail} = props

    const onMoreDetails = () =>{
        if (clientDetail !== "") {
            actions.setCurrentClient(clientDetail)
            actions.getAllClientInvoices(clientDetail.client_id)
        }  
    }

    return (
            
            <div>
            <div className="invoiceDetailCard">
           <div className="invoiceDetailCardTitle">Client Details</div>
           <div className="invoiceDetailCardSubTitle">Client Details</div>
           <div className="clientDetailsText">
               {(clientDetail.client_name === undefined ? <p> Client name</p> : <p>{clientDetail.client_name}</p>) }
               {(clientDetail.company === undefined ? <p>Company name</p> : <p>{clientDetail.company}</p>) }
               {(clientDetail.client_id === undefined ? <p>Company id</p> : <p>{clientDetail.client_id}</p>) }
           </div>
           <hr style={{marginTop:"20px", marginBottom:"20px"}}></hr>
           <div className="invoiceDetailCardSubTitle">Additional Details</div>
           <div className="paymentDetails"><span>Country</span> <span></span></div>
           <div className="paymentDetails"><span>Project</span> <span></span></div>
          
         <div style={{display:"flex"}}>
           <button className="clientEditButton" style={{marginTop:"25px", marginRight:"10px"}}>EDIT</button>
           
            <Link to={clientDetail  !== "" ? `/clients/${clientDetail.client_id}` : `/clients`}><button className="clientEditButton" style={{marginTop:"25px"}} onClick={onMoreDetails}>MORE DETAILS</button></Link>
           
            </div> 
        </div>
        
        </div>
        
    )
}

export default ClientDetail
