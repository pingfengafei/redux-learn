/**
 * Created by pingfengafei on 16/7/20.
 */
import {combineReducer} from 'redux'

import {GET_TOKEN_PENDDING, GET_TOKEN_SUCESS, GET_TOKEN_FAILED} from '../actions/tokenAction'

function tokenReducer(state = {text: {}, status: 'wait'}, action) {
    switch (action.type) {
        case GET_TOKEN_PENDDING:
            return {text: action.data, status: 'pendding'};
        case GET_TOKEN_SUCESS:
            return {text: action.data, status: 'sucess'};
        case GET_TOKEN_FAILED:
            return {text: action.data, status: 'failed'};
        default :
            return state;
    }
}
export default tokenReducer;