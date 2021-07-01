import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'
import signalsReducer from './signalsReducer'
import authReducer from './authReducer'
import budgetReducer from './budgetReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer,
    signals:signalsReducer,
    auth:authReducer,
    budgets:budgetReducer,
})

export default rootReducer