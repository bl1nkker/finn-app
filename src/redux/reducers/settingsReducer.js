import { CREATE_ACCOUNT, CREATE_ACCOUNT_ERROR, CREATE_FACILITY, CREATE_FACILITY_ERROR, DELETE_ACCOUNT, DELETE_ACCOUNT_ERROR, DELETE_FACILITY, DELETE_FACILITY_ERROR, FETCH_ACCOUNTS, FETCH_ACCOUNTS_ERROR, FETCH_FACILITIES, FETCH_FACILITIES_ERROR, UPDATE_ACCOUNT, UPDATE_ACCOUNT_ERROR, UPDATE_FACILITY, UPDATE_FACILITY_ERROR } from './../types'

const initialState = {
    accounts: [],
    companies:[],
    error: ''
}
const settingsReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_ACCOUNTS:
            return {...state, accounts:action.payload.data}
        case FETCH_ACCOUNTS_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_ACCOUNT:
            return state
        case CREATE_ACCOUNT_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_ACCOUNT:
            return state
        case DELETE_ACCOUNT_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_ACCOUNT:
            return state
        case UPDATE_ACCOUNT_ERROR:
            return {...state, error:action.payload.error}

        case FETCH_FACILITIES:
            return {...state, companies:action.payload.data}
        case FETCH_FACILITIES_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_FACILITY:
            return state
        case CREATE_FACILITY_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_FACILITY:
            return state
        case DELETE_FACILITY_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_FACILITY:
            return state
        case UPDATE_FACILITY_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default settingsReducer