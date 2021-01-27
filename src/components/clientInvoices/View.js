import React, {useEffect} from 'react'
import Navbar from "../navbar"
import ClientInvoicesPanel from "../clientInvoices/clientInvoicesPanel/View"
import "./clientInvoices.css"
import history from '../../history'

const clientInvoices = (props) => {
    
    const {actions,clientDetail, allInvoices, currentPage, invoices } = props
    
    useEffect(() => {
        if (clientDetail === null) {
            history.push('/clients')
        }
    },[])

    return (
        <div className="flex-container">
        {/* flexbox item 1 */}
        <div>
        <Navbar/>
        </div>

        {/* flexbox item 2 */}
        {clientDetail &&
        <div style={{width:"100%", backgroundColor:"#f9f9f9"}}>
           <ClientInvoicesPanel 
           clientDetail={clientDetail} 
           actions={actions}
            invoices={invoices}
            allInvoices={allInvoices}
           currentPage={currentPage}/>
        </div>
        }
  </div>
    )
}

export default clientInvoices
