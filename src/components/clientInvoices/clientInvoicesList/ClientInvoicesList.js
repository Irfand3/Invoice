import React from 'react'
import trash from "../../../assets/trash.png"
const ClientInvoicesList = (props) => {

    const {actions,invoice, company, index} = props
    const dateArray = invoice.dueTo.split("T")
    const date = dateArray[0]

   const onDelete = (invoice) => {
       try {
           actions.deleteInvoice(invoice)
           alert("Invoice deleted")
           const client = {
               company:company
           }
           
           if (invoice.paidStatus === false) {
                actions.setClientTotalAmountMinus(invoice.amount, client)
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
               (invoice.paidStatus === true ? <div className="listItem paid">Paid</div> : <div className="listItem unpaid">Unpaid</div>)
           }
           {
               (invoice.paidStatus === false ? <div className="listItem markAsPaidButton" onClick={() => actions.setMark(invoice)}>Mark as paid</div> : <div style={{visibility:"hidden"}} className="listItem markAsPaidButton"></div>)
           }
           
           <div className="listItem trash"><img  onClick={() => onDelete(invoice)}  src={trash} style={{width:"24px", height:"24px", objectFit:"contain"}}></img></div>
        </div>

        
    )
}

export default ClientInvoicesList
