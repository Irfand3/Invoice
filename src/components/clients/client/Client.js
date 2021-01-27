import React from 'react'

const Client = (props) => {

    const {client, index} = props

    return (
        <div>
        <div style={{display:"flex"}} className="listText" >
        <div style={{width:"80px", height:"50px",lineHeight:"50px", paddingLeft:"12px"}}>{index+1} </div>
        <div className="listItem">{client.client_name}</div>
        <div className="listItem">{client.company}</div>
        <div className="listItem">{client.client_id ? client.client_id: null}</div>
        <div className="listItem">{client.totalamount}</div>
     </div>
     </div>
    )
}

export default Client
