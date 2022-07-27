import {CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from "../actions/types";
import _ from 'lodash';
//object based-approach
const streamsReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload}
        case EDIT_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case DELETE_STREAM: 
            return _.omit(state, action.payload); //omit creates a new object 
        default:
            return state;
    }
}

export default streamsReducer;