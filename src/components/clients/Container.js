import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {setCurrentPage, getClients} from './modules/actions'
import {setCurrentClient} from "../clientInvoices/modules/actions"
import {getAllClientInvoices} from "../clientInvoices/modules/actions"
import {searchClient} from '../search/modules/actions'

const mapStateToProps = state => ({
    clients:state.client.clients,
    invoices:state.invoice.invoices,
    currentPage:state.client.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        setCurrentPage,
        setCurrentClient,
        getClients,
        searchClient,
        setCurrentClient,
        getAllClientInvoices
      },
      dispatch,
    ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps);