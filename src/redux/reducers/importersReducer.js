import { CREATE_IMPORTER, CREATE_IMPORTER_ERROR, DELETE_IMPORTER, DELETE_IMPORTER_ERROR, FETCH_IMPORTERS, FETCH_IMPORTERS_ERROR, UPDATE_IMPORTER, UPDATE_IMPORTER_ERROR } from './../types'

const initialState = {
    data: [],
    error: ''
}
const importersReducer = (state=initialState, action) =>{
    switch (action.type)
    {
        case FETCH_IMPORTERS:
            return {...state, data:action.payload.data, 
                total:action.payload.total, not_paid:action.payload.not_paid,
                companiesList: action.payload.companiesList}
        case FETCH_IMPORTERS_ERROR:
            return {...state, error:action.payload.error}
        case CREATE_IMPORTER:
            return state
        case CREATE_IMPORTER_ERROR:
            return {...state, error:action.payload.error}
        case DELETE_IMPORTER:
            return state
        case DELETE_IMPORTER_ERROR:
            return {...state, error:action.payload.error}
        case UPDATE_IMPORTER:
            return state
        case UPDATE_IMPORTER_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default importersReducer