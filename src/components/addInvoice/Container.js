import { connect } from 'react-redux'
import {addInvoice} from "../invoices/modules/actions"
import {setClientTotalAmount} from "../clients/modules/actions"
import {addNewClient} from "../clients/modules/actions"
import { bindActionCreators } from 'redux';
import {createClientAndInvoice} from "./modules/actions"

const mapStateToProps = state => ({
    clients:state.client.clients,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addInvoice,
        addNewClient,
        setClientTotalAmount,
        createClientAndInvoice,
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)