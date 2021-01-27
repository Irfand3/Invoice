import React, {useState, useEffect} from 'react'
import exportPDF from "./exportPDF"
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail"
import Invoice from "../Invoice/Invoice"
import { CSVLink, CSVDownload } from "react-csv";
import "./invoicesPanel.css"

const InvoicesPanel = (props) => {

    const {actions, invoices, currentPage} = props

    const [invoiceDetails, setInvoiceDetails] = useState({})
    const [filterValue, setFilterValue] = useState("All")
    const [month, setMonth] = useState(new Date)
    
    useEffect(() => {
        actions.setCurrentPageInvoice(1)
    },[invoices]);

    //Number of pages of list
    const numberOfPages = Math.ceil(invoices.length / 8)
    var pageNumber = []
    for(var i=0; i<numberOfPages; i++){
        pageNumber.push(<li key={i} className="pageNumber" value={i+1} onClick={(e) => actions.setCurrentPageInvoice(e.target.value)}>{i+1}</li>)
    }

    const onFilterButton = (query) => {
        setFilterValue(query)
        //set query as boolean value
        if (query=="Unpaid"){query=false}
        else if(query=="Paid"){query=true}
        
        actions.searchInvoice(query)
        actions.setCurrentPageInvoice(1)
    }

    const onGetAll = () =>{
        setFilterValue("All")
        actions.getInvoices()
        actions.setCurrentPageInvoice(1)
    }

    return (
        <div className="panelContainer">
        <div style={{display:"flex", marginTop:"30px"}}>
            <span className="invoicesHeader">Invoices</span>
            <div className="vertical"></div>
            <i className="fa fa-angle-double-right" style={{lineHeight:"34px"}} aria-hidden="true"></i>
            <div className="InvoicesActive">Invoices</div>
        </div>
        <div className="filters">
           <button className="filterButton" value="All" onClick={onGetAll}>ALL</button>
           <button className="filterButton" value={"Paid"}  onClick={e => onFilterButton(e.target.value)}>PAID</button>
           <button className="filterButton" value={"Unpaid"}  onClick={e => onFilterButton(e.target.value)}>UNPAID</button>
           <button className="filterButton" value={month.getMonth()+1 <10 ? ("0"+month.getMonth()+1).slice(-2) : month.getMonth()+1}  onClick={e => onFilterButton(e.target.value)}  >DUE THIS MONTH</button>
           <button className="filterButton" onClick={() => exportPDF(invoices)} >Export PDF</button>
          <button className="filterButton"> 
          <CSVLink style={{textDecoration:"none", color:"inherit"}} data={invoices}>Export CSV</CSVLink>
          </button>
        </div>
        <div className="flexRowCol">
        <div>
        <div className="invoicesHeader" style={{marginBottom:"5px"}}>{filterValue} Invoices</div>
            {<div style={{display:"flex", fontWeight:"bold", backgroundColor:"white"}} className="listText">
                   <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}} >#</div>
                   <div className="listItem">Client Name</div>
                   <div className="listItem">Company Name</div>
                   <div className="listItem">Invoice ID</div>
                   <div className="listItem">Due by</div>
                   <div className="listItem">Amount to pay</div>
               </div>}
           {   
               currentPage.map((invoice, i) => 
               <li style={invoice===invoiceDetails ? listItemSelected : listItem} 
                 onClick={()=>setInvoiceDetails(invoice)} key={i}>
                <Invoice invoice={invoice} index={i} />
                </li>)
           }
        </div>
        <div>
            <InvoiceDetail invoiceDetails={invoiceDetails}/>
        </div>
        
        </div>
           <div className="pageNumberContainer">
               {pageNumber}
           </div>
    
   </div>
    )
}
const listItemSelected = {
    backgroundColor:"#f9f9f9",
    listStyle:"none",
    border:"1px solid #eceeef"
}

const listItem = {
    backgroundColor:"white",
    listStyle:"none",
    borderTop:"1px solid #eceeef"  
}
export default InvoicesPanel
