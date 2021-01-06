import { takeEvery ,put} from 'redux-saga/effects'
import {SEARCH_CLIENT_REQUEST, SEARCH_CLIENT_SUCCESS, SEARCH_CLIENT_FAIL} from '../../../../actions/types'

function* handleSearchClient(action){
    try {
        console.log("from search client")
        
        yield put({type:SEARCH_CLIENT_SUCCESS, payload:action.payload})
    } catch (error) {
       yield put({type:SEARCH_CLIENT_FAIL, payload:error.message}) 
    }
}

function* searchClientsSagaWatcher(){
    yield takeEvery(SEARCH_CLIENT_REQUEST, handleSearchClient)
}


export default searchClientsSagaWatcher;