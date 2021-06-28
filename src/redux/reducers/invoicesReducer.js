import { CREATE_INVOICE, CREATE_INVOICE_ERROR, DELETE_INVOICE, DELETE_INVOICE_ERROR, FETCH_INVOICES, FETCH_INVOICES_ERROR, UPDATE_INVOICE, UPDATE_INVOICE_ERROR } from './../types'

const initialState = {
    data: [],
    total: 0,
    not_paid:0,
    companiesList: [],
    error: ''
}
const invoicesReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_INVOICES:
            return {...state, data:action.payload.data, 
                total:action.payload.total, not_paid:action.payload.not_paid,
                companiesList: action.payload.companiesList}
        case FETCH_INVOICES_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_INVOICE:
            return state
        case CREATE_INVOICE_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_INVOICE:
            return state
        case DELETE_INVOICE_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_INVOICE:
            return state
        case UPDATE_INVOICE_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default invoicesReducer