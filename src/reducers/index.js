import { combineReducers } from 'redux';
import alumni from './alumni';
import auth from './auth';

const rootReducer = combineReducers({
    alumni,
    auth
});

export default rootReducer;