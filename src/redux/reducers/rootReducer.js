import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'
import signalsReducer from './signalsReducer'
import authReducer from './authReducer'
import budgetReducer from './budgetReducer'
import revenueReducer from './revenueReducer'
import scansReducer from './scansReducer'
import importersReducer from './importersReducer'
import coworkersReducer from './coworkersReducer'
import settingsReducer from './settingsReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer,
    signals:signalsReducer,
    budgets:budgetReducer,
    revenues:revenueReducer,
    scans:scansReducer,
    importers: importersReducer,
    coworkers:coworkersReducer,
    settings:settingsReducer,

    app:appReducer,
    auth:authReducer,
})

export default rootReducer