import { CREATE_REVENUE, CREATE_REVENUE_ERROR, DELETE_REVENUE, DELETE_REVENUE_ERROR, FETCH_REVENUES, FETCH_REVENUES_ERROR, UPDATE_REVENUE, UPDATE_REVENUE_ERROR } from './../types'

const initState = {
    data: [],
    error:null
}

const revenueReducer = (state=initState, action) =>{
    switch (action.type) {
        case FETCH_REVENUES:
            return {...state, data: action.payload.data}
        case FETCH_REVENUES_ERROR:
            return {...state, error: action.payload.error}

        case DELETE_REVENUE:
            return state
        case DELETE_REVENUE_ERROR:
            return {...state, error: action.payload.error}

        case UPDATE_REVENUE:
            return state
        case UPDATE_REVENUE_ERROR:
            return {...state, error: action.payload.error}
        case CREATE_REVENUE:

            return state
        case CREATE_REVENUE_ERROR:
            return {...state, error: action.payload.error}
        default:
            return state;
    }
}

export default revenueReducer