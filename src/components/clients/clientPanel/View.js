import "./clientPanel.css"
import React, {useState, useEffect} from 'react'
import ClientDetail from "../clientDetail/ClientDetail"
import Client from "../client/Client"

const ClientPanel = (props) => {

    const {actions,invoices, clients, currentPage} = props

    useEffect(() => {
        actions.setCurrentPage(1)
    },[invoices, clients]);

    const numberOfPages = Math.ceil(clients.length / 8)
    var pageNumber = []
    for(var i=0; i<numberOfPages; i++){
        pageNumber.push(<li key={i} className="pageNumber" value={i+1} onClick={(e) => setCurrentPage(e.target.value)}>{i+1}</li>)
    }

    const [clientDetail, setClientDetail] = useState({})
    const [filterValue, setFilterValue] = useState("All")

    const onGetAll = (e) => {
        e.preventDefault()
        setFilterValue(e.target.value)
        actions.getAllClients()
        actions.setCurrentPage(1)
    }
    return (
        <div className="panelContainer">
           <div style={{display:"flex", marginTop:"30px"}}>
                 <span className="invoicesHeader">Clients</span>
                 <div className="vertical"></div>
                 <i className="fa fa-angle-double-right" style={{lineHeight:"34px"}} aria-hidden="true"></i>
                 <div className="InvoicesActive">Clients</div>
             </div>
             
             <div className="filters">
                <button className="filterButton" value="All" onClick={onGetAll}>ALL</button>
                <button className="filterButton" value="Domestic" onClick={(e) => setFilterValue(e.target.value)}>DOMESTIC</button>
                <button className="filterButton" value="Foreign" onClick={(e) => setFilterValue(e.target.value)}>FOREIGN</button>
                <button className="filterButton" >SORT BY DUE DATE</button>
             </div>
             <div className="flexRowCol">
                 <div>
             <div className="invoicesHeader" style={{marginBottom:"5px"}}>{filterValue} Clients</div>
            {<div style={{display:"flex", fontWeight:"bold", backgroundColor:"white"}} className="listText">
                        <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}} >#</div>
                        <div className="listItem">Client Name</div>
                        <div className="listItem">Company Name</div>
                        <div className="listItem">Company ID</div>
                        <div className="listItem">Due by</div>
                        <div className="listItem">Amount to pay</div>
                    </div>}
                {
                    
                    currentPage.map((client, i) => 
                    <li style={client===clientDetail ? listItemSelected : listItem}
                     onClick={()=>setClientDetail(client)} key={i}>
                    <Client client={client} index={i} /></li>)
                }
             </div>
             <div >
                 <ClientDetail actions={actions} clientDetail={clientDetail}/>
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
export default ClientPanel
