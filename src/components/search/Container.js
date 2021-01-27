import { connect } from 'react-redux'
import {searchClient, searchInvoice} from "./modules/actions"
import { bindActionCreators } from 'redux';
import {loggedUser, logoutUser} from "../../actions/auth"
import {getClients} from "../clients/modules/actions"
import {getInvoices} from "../invoices/modules/actions"

const mapStateToProps = state => ({
  user: state.auth.user
})


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        searchInvoice,
        getClients,
        getInvoices,
        searchClient,
        loggedUser,
        logoutUser
      },
      dispatch,
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)