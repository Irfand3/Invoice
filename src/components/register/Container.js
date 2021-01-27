import { connect } from 'react-redux'
//import {registerUser} from "./modules/actions"
import {registerUser} from "../../actions/auth"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  registerUser : state.userRegister
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        registerUser
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)