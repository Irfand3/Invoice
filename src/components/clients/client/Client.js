import React from 'react'

const Client = (props) => {

    const {client, index} = props
    const dateArray = client.dueTo.split("T")
    const date = dateArray[0]
    return (
        <div>
        <div style={{display:"flex"}} className="listText" >
        <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}}>{index+1} </div>
        <div className="listItem">{client.name}</div>
        <div className="listItem">{client.company}</div>
        <div className="listItem">{client.companyId}</div>
        <div className="listItem">{date}</div>
        <div className="listItem">{client.totalAmount}</div>
     </div>
     </div>
    )
}

export default Client
