import { DELETE_ALL_SIGNALS, DELETE_ALL_SIGNALS_ERROR, DELETE_SIGNAL, DELETE_SIGNAL_ERROR, FETCH_SIGNALS, FETCH_SIGNALS_ERROR } from './../types'

const initialState = {
    data: [],
    negativeBalanceSignals: [],
    checkDocsSignals: [],
    cashInconsistencySignals: [],
    error: ''
}
const signalsReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_SIGNALS:
            return {...state, data:action.payload.data,
                negativeBalanceSignals: action.payload.negativeBalanceSignals,
                checkDocsSignals: action.payload.checkDocsSignals,
                cashInconsistencySignals: action.payload.cashInconsistencySignals,
            }
        case FETCH_SIGNALS_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_SIGNAL:
            return state
        case DELETE_SIGNAL_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_ALL_SIGNALS:
            return state
        case DELETE_ALL_SIGNALS_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default signalsReducer