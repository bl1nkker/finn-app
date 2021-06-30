import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'
import signalsReducer from './signalsReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer,
    signals:signalsReducer
})

export default rootReducer