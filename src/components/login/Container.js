import { connect } from 'react-redux'
import {loginUser} from "./modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  loginUser : state.userLogin
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        loginUser
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)