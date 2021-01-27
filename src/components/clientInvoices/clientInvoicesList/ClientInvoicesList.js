import React from 'react'
import trash from "../../../assets/trash.png"
const ClientInvoicesList = (props) => {

    const {actions,invoice, company, index, clientDetail} = props
    const dateArray = invoice.dueto.split("T")
    const date = dateArray[0]
    
   const onDelete = (invoice, client) => {
       try {
           console.log(invoice.invoice_id)
           console.log(client.client_id)
           actions.deleteInvoice(invoice.invoice_id,client.client_id)
           
           if (invoice.paidstatus === false) {
               
                actions.setClientTotalAmount(invoice.amount, client.client_id, "-")
           }
           
       } catch (error) {
           console.log(error)
       }
   }
    return (
        
        <div style={{display:"flex"}} className="listText" >
           <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}}>{index+1} </div>
           <div className="listItem">{invoice.amount}</div>
           <div className="listItem">{date}</div>
           {
               (invoice.paidstatus === true ? <div className="listItem paid">Paid</div> : <div className="listItem unpaid">Unpaid</div>)
           }
           {
               (invoice.paidstatus === false ? <div className="listItem markAsPaidButton" onClick={() => actions.setMark(invoice, clientDetail)}>Mark as paid</div> : <div style={{visibility:"hidden"}} className="listItem markAsPaidButton"></div>)
           }
           
           <div className="listItem trash"><img  onClick={() => onDelete(invoice, clientDetail)}  src={trash} style={{width:"24px", height:"24px", objectFit:"contain"}}></img></div>
        </div>

        
    )
}

export default ClientInvoicesList
