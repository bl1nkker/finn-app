import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'
import signalsReducer from './signalsReducer'
import authReducer from './authReducer'
import budgetReducer from './budgetReducer'
import revenueReducer from './revenueReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer,
    signals:signalsReducer,
    budgets:budgetReducer,
    revenues:revenueReducer,
    
    auth:authReducer,
})

export default rootReducer