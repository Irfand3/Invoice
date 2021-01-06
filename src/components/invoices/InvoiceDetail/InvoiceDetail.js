import React from 'react'
import "./invoiceDetail.css"

const InvoiceDetail = (props) => {
   
    const {invoiceDetails} = props
  
    return (
        <div>
            <div className="invoiceDetailCard">
           <div className="invoiceDetailCardTitle">Invoice Details</div>
           <div className="invoiceDetailCardSubTitle">Client Details</div>
           <div className="clientDetailsText">
               {(invoiceDetails.client === undefined ? <p>Client name</p> : <p>{invoiceDetails.client}</p>) }
               {(invoiceDetails.company === undefined ? <p>Company name</p> : <p>{invoiceDetails.company}</p>) }
               {(invoiceDetails.companyId === undefined ? <p>Company id</p> : <p>{invoiceDetails.companyId}</p>) }
           </div>
           <hr style={{marginTop:"20px", marginBottom:"20px"}}></hr>
           <div className="invoiceDetailCardSubTitle">Payment details</div>
           <div className="paymentDetails"><span>Amount</span> <span>{invoiceDetails.amount}</span></div>
           <div className="paymentDetails"><span>Due date</span> <span>{invoiceDetails.dueTo}</span></div>
           <div className="paymentDetails"><span>Status</span> {(invoiceDetails.paidStatus === false ? <span style={{color:"#ff967e"}}>Unpaid</span> : invoiceDetails.paidStatus === true ? <span style={{color:"#1dcf77"}}>Paid</span> : <span></span>)}</div>
           <button className="invoiceDetailEdit">EDIT</button>
           
        </div>
        </div>
    )
}

export default InvoiceDetail
