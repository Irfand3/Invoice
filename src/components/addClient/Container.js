import { connect } from 'react-redux'
import {saveClient} from "./modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    clients:state.client.clients,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        saveClient,
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)