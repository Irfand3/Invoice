import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {getClientInvoices,setMark,deleteInvoice,setClientTotalAmount,setClientTotalAmountMinus, setCurrentPage, searchClientInvoices} from "./modules/actions"

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
        getClientInvoices,
        setMark,
        deleteInvoice,
        setClientTotalAmount,
        setClientTotalAmountMinus,
        setCurrentPage,
        searchClientInvoices
      },
      dispatch,
    ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps);