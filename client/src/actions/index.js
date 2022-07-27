import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from "./types";
import streams from '../apis/streams';
import history from "../history";

const SignIn = (userId) => {
    return { 
        type : SIGN_IN,
        payload: userId
    }
}

const SignOut = (userId) => {
    return { 
        type : SIGN_OUT,
        payload: userId
    }
}

const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().auth;
        const response =  await streams.post('/streams', {...formValues, userId : userId});

       dispatch({type: CREATE_STREAM, payload: response.data});

       //redirect to another page after successful submit - using custom history
       history.push('/');

    };
}

const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({type: FETCH_STREAMS, payload: response.data});
    }
}

const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({type: FETCH_STREAM, payload: response.data});
    }
}

const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);

        dispatch({type: EDIT_STREAM, payload: response.data});

        history.push('/');
    }
}

const deleteStream = (id) => { 
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({type: DELETE_STREAM, payload: id});

        history.push('/');
    }
}

export{
    SignIn,
    SignOut,
    createStream,
    fetchStreams,
    fetchStream,
    editStream,
    deleteStream
}