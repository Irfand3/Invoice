import React from 'react'

const ClientInvoicesDetails = (props) => {

    const {clientDetail} = props
    
    return (
       
          <div className="invoiceDetailCard">
           <div className="invoiceDetailCardTitle">Client Details</div>
           <div className="invoiceDetailCardSubTitle">Client Details</div>
           <div className="clientDetailsText">
              {(clientDetail.name === undefined ? <p>Client name</p> : <p>{clientDetail.name}</p>) }
               {(clientDetail.company === undefined ? <p>Company name</p> : <p>{clientDetail.company}</p>) }
               {(clientDetail.companyId === undefined ? <p>Company id</p> : <p>{clientDetail.companyId}</p>) }
          </div>
           <hr style={{marginTop:"20px", marginBottom:"20px"}}></hr>
           <div className="invoiceDetailCardSubTitle">Additional Details</div>
           <div className="paymentDetails"><span>Country</span> <span></span></div>
           <div className="paymentDetails"><span>Project</span> <span></span></div>
          
         <div style={{display:"flex"}}>
           <button className="clientEditButton btn-block" style={{marginTop:"25px", marginRight:"10px"}}>EDIT</button>
           
          </div> 
        </div>
        
    )
}

export default ClientInvoicesDetails
