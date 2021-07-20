import { CREATE_ACCOUNT, CREATE_ACCOUNT_ERROR, CREATE_FACILITY, CREATE_FACILITY_ERROR, DELETE_ACCOUNT, DELETE_ACCOUNT_ERROR, DELETE_FACILITY, DELETE_FACILITY_ERROR, FETCH_ACCOUNTS, FETCH_ACCOUNTS_ERROR, FETCH_FACILITIES, FETCH_FACILITIES_ERROR, UPDATE_ACCOUNT, UPDATE_ACCOUNT_ERROR, UPDATE_FACILITY, UPDATE_FACILITY_ERROR } from './../types'
import { deleteAccount, deleteFacility, getAccounts, getFacilities, postAccount, postFacility, putAccount, putFacility } from './../../axios/index'

export const fetchAccounts = () => async(dispatch) =>{
    try {
        const { data } = await getAccounts()
        dispatch({ type:FETCH_ACCOUNTS, payload: {data} })
    } catch (error) {
        console.log(error);
        dispatch({ type:FETCH_ACCOUNTS_ERROR, payload:{error} })
    }
}


export const createAccount = (formData) => async(dispatch) =>{
    try {
        await postAccount(formData)
        // After query, the page will be refreshed
        dispatch({ type:CREATE_ACCOUNT, payload:{created: true} })
    } catch (error) {
        console.log(error);
        dispatch({ type:CREATE_ACCOUNT_ERROR, payload:{error} })
    }
}

export const updateAccount = (formData, accountId) => async(dispatch) =>{
    try {
        await putAccount(formData, accountId)
        // After query, the page will be refreshed
        dispatch({ type: UPDATE_ACCOUNT, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type: UPDATE_ACCOUNT_ERROR, payload:{error} })
    }
}

export const removeAccount = (accountType, accountId) => async(dispatch) =>{
    try {
        await deleteAccount(accountType, accountId)
        dispatch({ type: DELETE_ACCOUNT, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_ACCOUNT_ERROR, payload:{error} })
    }
}

export const fetchFacilities = () => async(dispatch) =>{
    try {
        const { data } = await getFacilities()
        dispatch({ type: FETCH_FACILITIES, payload:{ data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_FACILITIES_ERROR, payload:{ error } })
    }
}

export const removeFacility = (coworkerId) => async(dispatch) =>{
    try {
        await deleteFacility(coworkerId)
        dispatch({ type:DELETE_FACILITY, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_FACILITY_ERROR, payload:{error} })
    }
}

export const updateFacility = (formData, coworkerId) => async(dispatch) =>{
    try {
        await putFacility(formData, coworkerId)
        dispatch({ type:UPDATE_FACILITY, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_FACILITY_ERROR, payload:{error} })
    }
}

export const createFacility = (formData) => async(dispatch) =>{
    try {
        await postFacility(formData)
        dispatch({ type:CREATE_FACILITY, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_FACILITY_ERROR, payload:{error} })
    }
}