import React, {useEffect} from 'react'
import { hot } from 'react-hot-loader/root'
import {Provider, useDispatch} from 'react-redux'
import store from './store'
import Register from './components/register'
import history from './history'
import {Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import Login from "./components/login"
import Invoices from './components/invoices'
import AddInvoice from './components/addInvoice'
import './css/fonts.css'
import Clients from "./components/clients"
import ClientInvoices from './components/clientInvoices'
import AddClient from "./components/addClient"
import Dashboard from './components/dashboard/View'
import {loginUserSuccess,loggedUser} from "./actions/auth"
import {getInvoices} from "./components/invoices/modules/actions"
import {getClients} from "./components/clients/modules/actions"

const App = () => {
    
    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            store.dispatch(loggedUser())
            store.dispatch(getInvoices())
            store.dispatch(getClients())
        }
    }, [])
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
