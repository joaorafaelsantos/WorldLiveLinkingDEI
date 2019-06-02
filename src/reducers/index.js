import { combineReducers } from 'redux';
import alumni from './alumni';
import auth from './auth';
import chat from './chat';
import backoffice from './backoffice';

const rootReducer = combineReducers({
    alumni,
    auth,
    chat,
    backoffice
});

export default rootReducer;