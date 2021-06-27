import { combineReducers } from 'redux'

import invoicesReducer from './invoicesReducer'

const rootReducer = combineReducers({
    invoices:invoicesReducer
})

export default rootReducer