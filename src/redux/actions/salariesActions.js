import { CREATE_DEDUCTION, CREATE_DEDUCTION_ERROR, CREATE_WORKHOUR, CREATE_WORKHOUR_ERROR, DELETE_COWORKER, DELETE_COWORKER_ERROR, DELETE_DEDUCTION, DELETE_DEDUCTION_ERROR, DELETE_WORKHOUR, DELETE_WORKHOUR_ERROR, FETCH_COWORKERS, UPDATE_COWORKER, UPDATE_COWORKER_ERROR, UPDATE_DEDUCTION, UPDATE_DEDUCTION_ERROR, UPDATE_WORKHOUR, UPDATE_WORKHOUR_ERROR } from '../types'
import { deleteSalary, deleteWorkHours, getCoworkersWithSalaries, postSalary, postWorkHours, putSalary, putWorkHours } from '../../axios/index'

export const fetchCoworkers = () => async(dispatch) =>{
    try {
        const { data } = await getCoworkersWithSalaries()
        dispatch({ type: FETCH_COWORKERS, payload:{ data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_COWORKERS, payload:{ error } })
    }
}

export const addSalary = (formData) => async(dispatch) =>{
    try {
        await postSalary(formData)
        dispatch({ type:CREATE_DEDUCTION, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_DEDUCTION_ERROR, payload:{error} })
    }
}
export const removeSalary = (salaryId) => async(dispatch) =>{
    try {
        await deleteSalary(salaryId)
        dispatch({ type:DELETE_DEDUCTION, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_DEDUCTION_ERROR, payload:{error} })
    }
}
export const updateSalary = (formData, salaryId) => async(dispatch) =>{
    try {
        await putSalary(formData, salaryId)
        dispatch({ type:UPDATE_DEDUCTION, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_DEDUCTION_ERROR, payload:{error} })
    }
}
export const addWorkHours = (formData) => async(dispatch) =>{
    try {
        await postWorkHours(formData)
        dispatch({ type:CREATE_WORKHOUR, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_WORKHOUR_ERROR, payload:{error} })
    }
}

// Wtf
export const removeWorkHours = (workHoursId) => async(dispatch) =>{
    try {
        await deleteWorkHours(workHoursId)
        dispatch({ type:DELETE_WORKHOUR, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_WORKHOUR_ERROR, payload:{error} })
    }
}
export const updateWorkHours = (formData, workHoursId) => async(dispatch) =>{
    try {
        await putWorkHours(formData, workHoursId)
        dispatch({ type:UPDATE_WORKHOUR, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_WORKHOUR_ERROR, payload:{error} })
    }
}