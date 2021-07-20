import { FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR, FETCH_USERS, FETCH_USERS_ERROR } from "../types"

const initState = {
    categories: [],
    users:[],
    error: null
}

const appReducer = (state=initState, action) =>{
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.payload.data}
        case FETCH_CATEGORIES_ERROR:
            console.log(action.payload.error)
            return {...state, error: action.payload.error}
        
        case FETCH_USERS:
            return {...state, users: action.payload.data}
        case FETCH_USERS_ERROR:
            return {...state, error: action.payload.error}
        default:
            return state
    }
}

export default appReducer