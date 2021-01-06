import React from 'react'
import { hot } from 'react-hot-loader/root'
import {Provider} from 'react-redux'
import store from './store'
import Register from './components/register'
import history from './history'
import {Router, Route, Link, Switch} from 'react-router-dom'
import Login from "./components/login"
import Invoices from './components/invoices'
import AddInvoice from './components/addInvoice'
import './css/fonts.css'
import Clients from "./components/clients"
import ClientInvoices from './components/clientInvoices'
import AddClient from "./components/addClient"
import Dashboard from './components/dashboard/View'

const App = () => {
    return (
        <Provider store={store}> 
            <Router history={history}>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/invoices" component={Invoices}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/addClient" component={AddClient}/>
            <Route exact path="/clients" component={Clients}/>
            <Route exact path="/clients/:company" component={ClientInvoices}/>
            <Route exact path="/addInvoice" component={AddInvoice}/>
            
            </Router>
        </Provider>
        
    )
}

export default hot(App)
