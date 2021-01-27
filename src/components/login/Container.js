import { connect } from 'react-redux'
import {loginUser} from "../../actions/auth"
import { bindActionCreators } from 'redux';
import {getInvoices} from "../invoices/modules/actions"

const mapStateToProps = state => ({
  loginUser : state.userLogin
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        loginUser,
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)