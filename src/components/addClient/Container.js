import { connect } from 'react-redux'
import {addNewClient} from "../clients/modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    clients:state.client.clients,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addNewClient,
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)