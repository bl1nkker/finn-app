import { CREATE_BUDGET, CREATE_BUDGET_ERROR, DELETE_BUDGET, DELETE_BUDGET_ERROR, FETCH_BUDGETS, FETCH_BUDGETS_ERROR, UPDATE_BUDGET, UPDATE_BUDGET_ERROR } from './../types'
import { deleteBudget, getBudgets, postBudget, putBudget } from './../../axios/index'

export const fetchBudgets = (budgetType, added_at_after, added_at_before, ordering) => async(dispatch) =>{
    try {
        const incomes = await getBudgets('income', added_at_after, added_at_before, ordering)
        const expenses = await getBudgets('expense', added_at_after, added_at_before, ordering)
        // Get dates (unic)
        const tmpIncomes = incomes.data.map(income => income.added_at)
        const tmpExpenses = expenses.data.map(expense => expense.added_at)
        const filteredDataIncomes = tmpIncomes.filter((item, pos) => tmpIncomes.indexOf(item) === pos)
        const filteredDataExpenses = tmpExpenses.filter((item, pos) => tmpExpenses.indexOf(item) === pos)
        let unicDates = filteredDataExpenses.concat(filteredDataIncomes)
        console.log(tmpIncomes, tmpExpenses)
        unicDates = unicDates.filter((item, pos) => unicDates.indexOf(item) === pos)
        console.log(unicDates)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
            const relatedIncome = incomes.data.filter(income => income.added_at === date)
            return {added_at:date, incomes:relatedIncome}
        })
        editedData = editedData.map(object => {
            const relatedExpense = expenses.data.filter(expense => expense.added_at === object.added_at)
            return  { ...object, expenses:relatedExpense }
        })
        dispatch({ type:FETCH_BUDGETS, payload: { editedData } })
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