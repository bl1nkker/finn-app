import { CREATE_BUDGET, CREATE_BUDGET_ERROR, DELETE_BUDGET, DELETE_BUDGET_ERROR, FETCH_BUDGETS, FETCH_BUDGETS_ERROR, UPDATE_BUDGET, UPDATE_BUDGET_ERROR } from './../types'
import { deleteBudget, getBudgets, postBudget, putBudget } from './../../axios/index'

export const fetchBudgets = (budgetType) => async(dispatch) =>{
    try {
        const { data } = await getBudgets(budgetType)
        dispatch({ type:FETCH_BUDGETS, payload: {data} })
    } catch (error) {
        console.log(error);
        dispatch({ type:FETCH_BUDGETS_ERROR, payload:{error} })
    }
}

export const createBudget = (budgetType, formData) => async(dispatch) =>{
    try {
        await postBudget(budgetType, formData)
        // After query, the page will be refreshed
        dispatch({ type:CREATE_BUDGET, payload:{created: true} })
    } catch (error) {
        console.log(error);
        dispatch({ type:CREATE_BUDGET_ERROR, payload:{error} })
    }
}

export const updateBudget = (budgetType, formData, budgetId) => async(dispatch) =>{
    try {
        await putBudget(budgetType, formData, budgetId)
        // After query, the page will be refreshed
        dispatch({ type: UPDATE_BUDGET, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type: UPDATE_BUDGET_ERROR, payload:{error} })
    }
}

export const removeBudget = (budgetType, budgetId) => async(dispatch) =>{
    try {
        await deleteBudget(budgetType, budgetId)
        dispatch({ type: DELETE_BUDGET, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_BUDGET_ERROR, payload:{error} })
    }
}