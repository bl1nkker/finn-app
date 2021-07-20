import { FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR, FETCH_USERS, FETCH_USERS_ERROR } from './../types.js'
import { getCategories, getUsers } from './../../axios/index'

export const fetchCategories = () => async(dispatch) =>{
    try {
        const { data } = await getCategories()
        dispatch({ type: FETCH_CATEGORIES, payload:{data} })
    } catch (error) {
        dispatch({ type: FETCH_CATEGORIES_ERROR, payload:{ error } })
    }
}

export const fetchUsersData = () => async(dispatch) =>{
    try {
        const { data } = await getUsers()
        dispatch({ type: FETCH_USERS, payload: {data} })
    } catch (error) {
        dispatch({ type: FETCH_USERS_ERROR, payload:{ error } })
    }
}