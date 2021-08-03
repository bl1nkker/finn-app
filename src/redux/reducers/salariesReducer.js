import {  CREATE_DEDUCTION, CREATE_DEDUCTION_ERROR, CREATE_WORKHOUR, CREATE_WORKHOUR_ERROR, DELETE_DEDUCTION, DELETE_DEDUCTION_ERROR, DELETE_WORKHOUR, DELETE_WORKHOUR_ERROR, FETCH_COWORKERS, FETCH_COWORKERS_ERROR, UPDATE_COWORKER, UPDATE_COWORKER_ERROR, UPDATE_DEDUCTION, UPDATE_DEDUCTION_ERROR, UPDATE_WORKHOUR, UPDATE_WORKHOUR_ERROR } from './../types'

const initialState = {
    data: [],
    error: ''
}
const salariesReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_COWORKERS:
            return {...state, data:action.payload.data}
        case FETCH_COWORKERS_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_DEDUCTION:
            return state
        case CREATE_DEDUCTION_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_DEDUCTION:
            return state
        case DELETE_DEDUCTION_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_DEDUCTION:
            return state
        case UPDATE_DEDUCTION_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_WORKHOUR:
            return state
        case CREATE_WORKHOUR_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_WORKHOUR:
            return state
        case DELETE_WORKHOUR_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_WORKHOUR:
            return state
        case UPDATE_WORKHOUR_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default salariesReducer