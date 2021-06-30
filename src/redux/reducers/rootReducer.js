import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'
import signalsReducer from './signalsReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer,
    signals:signalsReducer,
    auth:authReducer,
})

export default rootReducer