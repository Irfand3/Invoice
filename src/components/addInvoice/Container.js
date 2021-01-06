import { connect } from 'react-redux'
import {createNewInvoice} from "./modules/actions"
import {setClientTotalAmount} from "../../actions/clientActions"
import {saveClient} from "../../components/addClient/modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    clients:state.client.clients,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        createNewInvoice,
        saveClient,
        setClientTotalAmount
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)