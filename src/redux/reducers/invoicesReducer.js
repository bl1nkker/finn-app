import { CREATE_INVOICE, CREATE_INVOICE_ERROR, FETCH_INVOICES, FETCH_INVOICES_ERROR, UPDATE_INVOICE, UPDATE_INVOICE_ERROR } from './../types'

const initialState = {
    data: [],
    error: ''
}
const invoicesReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_INVOICES:
            return {...state, data:action.payload.data}
        case FETCH_INVOICES_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_INVOICE:
            return state
        case CREATE_INVOICE_ERROR:
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