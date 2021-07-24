import { CREATE_BUDGET, CREATE_BUDGET_ERROR, DELETE_BUDGET, DELETE_BUDGET_ERROR, FETCH_BUDGETS, FETCH_BUDGETS_ERROR, UPDATE_BUDGET, UPDATE_BUDGET_ERROR } from './../types'

const initState = {
    data:[],
    error:null
}

const budgetReducer = (state=initState, action) =>{
    switch (action.type) {
        case FETCH_BUDGETS:
            return {...state, data:action.payload.editedData}
        case FETCH_BUDGETS_ERROR:
            return {...state, error:action.payload.error}
        
        case CREATE_BUDGET:
            return state
        case CREATE_BUDGET_ERROR:
            return {...state, error:action.payload.error}

        case UPDATE_BUDGET:
            return state
        case UPDATE_BUDGET_ERROR:
            return {...state, error:action.payload.error}

        case DELETE_BUDGET:
            return state
        case DELETE_BUDGET_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state;
    }
}

export default budgetReducer