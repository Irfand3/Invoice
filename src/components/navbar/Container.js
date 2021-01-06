import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {getAllClients} from "../clients/modules/actions"
import {getAllInvoices, setCurrentPage} from "../invoices/modules/actions"


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getAllClients,
        getAllInvoices,
        setCurrentPage
      },
      dispatch,
    ),
});


export default connect(null, mapDispatchToProps)