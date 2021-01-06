import React, {useEffect, useState} from 'react'
import ClientInvoiceDetails from "../clientInvoicesDetails/ClientInvoicesDetails"
import ClientInvoicesList from "../clientInvoicesList/ClientInvoicesList"
import {useParams} from "react-router-dom"

const ClientInvoicesPanel = (props) => {

    const {actions, invoices, allInvoices, clientDetail, currentPage} = props

    let params = useParams();
    console.log(clientDetail)
    const numberOfPages = Math.ceil(invoices.length / 8)

    var pageNumber = []
    for(var i=0; i<numberOfPages; i++){
        pageNumber.push(<li key={i} className="pageNumber" value={i+1} onClick={(e) => actions.setCurrentPage(e.target.value)}>{i+1}</li>)
    }

    const [filterValue, setFilterValue] = useState("All") 

    useEffect(()=>{
        actions.setCurrentPage(1)
    },[invoices,allInvoices])

    const onFilterButton = (query) => {
        setFilterValue(query)
        //set query as boolean value
        if (query=="Unpaid"){query=false} else{query=true}
        actions.getClientInvoices(clientDetail.name)
        actions.searchClientInvoices(query)
        actions.setCurrentPage(1)
    }

    const onGetAll = () =>{
        setFilterValue("All")
        actions.getClientInvoices(clientDetail.name)
        actions.setCurrentPage(1)
    }

    return (
        <div className="panelContainer">
            <div style={{display:"flex", marginTop:"30px"}}>
                 <span className="invoicesHeader">{clientDetail.company}</span>
                 <div className="vertical"></div>
                 <i className="fa fa-angle-double-right" style={{lineHeight:"34px"}} aria-hidden="true"></i>
                 <div className="InvoicesActive">Client Details</div>
             </div>
             <div className="filters">
                <button className="filterButton" onClick={onGetAll} value="All">All</button>
                <button className="filterButton" onClick={(e) => onFilterButton(e.target.value)} value={"Paid"}>Paid</button>
                <button className="filterButton" onClick={(e) => onFilterButton(e.target.value)} value={"Unpaid"}>Unpaid</button>
             </div>
            <div className="flexRowCol">
                <div>
                <div className="invoicesHeader" style={{marginBottom:"5px"}}>{filterValue} Invoices</div>
                {<div style={{display:"flex", fontWeight:"bold", backgroundColor:"white"}} className="listText">
                        <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}} >#</div>
                        <div className="listItem">Amount to pay</div>
                        <div className="listItem">Due by</div>
                        <div className="listItem">Status</div>
                        <div className="listItem">Change status</div>
                        <div className="listItem">Action</div>
                    </div>
                    }
                    {   
                    currentPage.map((invoice, i) => 
                    <li  style={listItem} key={i}>
                        <ClientInvoicesList
                        actions={actions} 
                        invoice={invoice} 
                        currentPage={currentPage}
                        company={clientDetail.company} 
                        index={i} />
                        </li>)
                }
            </div>
           <ClientInvoiceDetails clientDetail={clientDetail}/>
            </div>
            <div className="pageNumberContainer">
                    {pageNumber}
            </div>
                
        </div>
    )
}

const listItem = {
    backgroundColor:"white",
    listStyle:"none",
    borderTop:"1px solid #eceeef"  
}

export default ClientInvoicesPanel
