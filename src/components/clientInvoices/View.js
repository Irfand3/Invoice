import React from 'react'
import Navbar from "../navbar"
import ClientInvoicesPanel from "../clientInvoices/clientInvoicesPanel/View"
import "./clientInvoices.css"

const clientInvoices = (props) => {
    
    const {actions,clientDetail, allInvoices, currentPage, invoices } = props

    console.log(clientDetail)
    return (
        <div className="flex-container">
        {/* flexbox item 1 */}
        <div>
        <Navbar/>
        </div>

        {/* flexbox item 2 */}
        <div style={{width:"100%", backgroundColor:"#f9f9f9"}}>
           <ClientInvoicesPanel 
           clientDetail={clientDetail} 
           actions={actions}
            invoices={invoices}
            allInvoices={allInvoices}
           currentPage={currentPage}/>
        </div>
      
  </div>
    )
}

export default clientInvoices
