import { connect } from 'react-redux'
import {searchClient, searchInvoice} from "./modules/actions"
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        searchInvoice,
        searchClient,
      },
      dispatch,
    ),
});

export default connect(null, mapDispatchToProps)