import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {setCurrentPage, getAllClients, setCurrentClient} from './modules/actions'
import {getClientInvoices} from "../clientInvoices/modules/actions"
import {searchClient} from '../search/modules/actions'

const mapStateToProps = state => ({
    clients:state.client.clients,
    invoices:state.invoice.invoices,
    currentPage:state.client.currentPage   
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        setCurrentPage,
        getAllClients,
        searchClient,
        setCurrentClient,
        getClientInvoices
      },
      dispatch,
    ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps);