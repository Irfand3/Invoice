import React from 'react'
import "./invoice.css"

const Invoice = (props) => {

    const {invoice, index} = props
    const dateArray = invoice.dueTo.split("T")
    const date = dateArray[0]
    return (
        <div>
        <div style={{display:"flex"}} className="listText" >
           <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}}>{index+1} </div>
           <div className="listItem">{invoice.client}</div>
           <div className="listItem">{invoice.company}</div>
           <div className="listItem">{invoice.companyId}</div>
           <div className="listItem">{date}</div>
           <div className="listItem">{invoice.amount}</div>
        </div>
        </div>
    )
}

export default Invoice
