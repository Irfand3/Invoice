import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {setCurrentPageInvoice, getAllInvoices} from './modules/actions'
import {getInvoices} from "./modules/actions"
import {searchInvoice} from '../search/modules/actions'

const mapStateToProps = state => ({
    invoices:state.invoice.invoices,
    currentPage:state.invoice.currentPage   
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        setCurrentPageInvoice,
        getInvoices,
        searchInvoice
      },
      dispatch,
    ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps);