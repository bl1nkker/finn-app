import { CREATE_COWORKER, CREATE_COWORKER_ERROR, DELETE_COWORKER, DELETE_COWORKER_ERROR, FETCH_COWORKERS, FETCH_COWORKERS_ERROR, UPDATE_COWORKER, UPDATE_COWORKER_ERROR } from './../types'

const initialState = {
    data: [],
    error: ''
}
const coworkersReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_COWORKERS:
            return {...state, data:action.payload.data}
        case FETCH_COWORKERS_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_COWORKER:
            return state
        case CREATE_COWORKER_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_COWORKER:
            return state
        case DELETE_COWORKER_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_COWORKER:
            return state
        case UPDATE_COWORKER_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default coworkersReducer