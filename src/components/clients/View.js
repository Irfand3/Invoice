import React, {useEffect} from 'react'
import Navbar from "../navbar"
import Search from "../search"
import ClientPanel from "../clients/clientPanel/View"
import { useHistory } from "react-router-dom";

const Clients = (props) => {

    const {actions, invoices, clients, currentPage} = props

    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {
        if(!user){
            history.push('/login')
        }
    });
    return (
        <div className="flex-container" style={{backgroundColor:"#f9f9f9"}}>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{width:"100%"}}>
                <Search></Search> 
                <ClientPanel actions={actions} invoices={invoices} clients={clients} currentPage={currentPage}></ClientPanel>
            </div>
        </div>
    )
}

export default Clients
