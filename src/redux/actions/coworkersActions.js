import { CREATE_COWORKER, CREATE_COWORKER_ERROR, DELETE_COWORKER, DELETE_COWORKER_ERROR, FETCH_COWORKERS, UPDATE_COWORKER, UPDATE_COWORKER_ERROR } from '../types'
import { deleteCoworker, getCoworkers, postCoworker, putCoworker } from '../../axios/index'

export const fetchCoworkers = () => async(dispatch) =>{
    try {
        const { data } = await getCoworkers()
        dispatch({ type: FETCH_COWORKERS, payload:{ data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_COWORKERS, payload:{ error } })
    }
}

export const removeCoworker = (coworkerId) => async(dispatch) =>{
    try {
        await deleteCoworker(coworkerId)
        dispatch({ type:DELETE_COWORKER, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_COWORKER_ERROR, payload:{error} })
    }
}

export const updateCoworker = (formData, coworkerId) => async(dispatch) =>{
    try {
        await putCoworker(formData, coworkerId)
        dispatch({ type:UPDATE_COWORKER, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_COWORKER_ERROR, payload:{error} })
    }
}

export const createCoworker = (formData) => async(dispatch) =>{
    try {
        await postCoworker(formData)
        dispatch({ type:CREATE_COWORKER, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_COWORKER_ERROR, payload:{error} })
    }
}