import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {getClients} from "../clients/modules/actions"
import {getAllInvoices, setCurrentPageInvoice} from "../invoices/modules/actions"
import {setCurrentPage} from "../clients/modules/actions"
import {getInvoices} from "../invoices/modules/actions"

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getClients,
        getInvoices,
        setCurrentPageInvoice,
        setCurrentPage
      },
      dispatch,
    ),
});


export default connect(null, mapDispatchToProps)