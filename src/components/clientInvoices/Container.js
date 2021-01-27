import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {getAllClientInvoices,setMark,deleteInvoice, setCurrentPageClientInvoices} from "./modules/actions"
import {searchClientInvoices} from "../search/modules/actions"
import {setClientTotalAmount} from "../clients/modules/actions"

const mapStateToProps = state => ({
    clients:state.client.clients,
    invoices:state.clientInvoices.invoices,
    currentPage:state.clientInvoices.currentPage,
    clientDetail:state.clientInvoices.currentClient,  
    allinvoices:state.invoice.invoices
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getAllClientInvoices,
        setMark,
        deleteInvoice,
        setClientTotalAmount,
        setCurrentPageClientInvoices,
        searchClientInvoices
      },
      dispatch,
    ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps);