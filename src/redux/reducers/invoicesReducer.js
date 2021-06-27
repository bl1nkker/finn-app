import { FETCH_INVOICES, FETCH_INVOICES_ERROR } from './../types'

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
        default:
            return state
    }
}

export default invoicesReducer