import { combineReducers } from 'redux';
import alumni from './alumni';
import auth from './auth';
import chat from './chat';

const rootReducer = combineReducers({
    alumni,
    auth,
    chat
});

export default rootReducer;