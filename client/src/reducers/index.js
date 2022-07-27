import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { reducer as FormReducer } from 'redux-form';
import streamsReducer from './streamsReducer';
 

export default combineReducers({
    auth : authReducer,
    form : FormReducer,
    streams : streamsReducer
})