import { CREATE_SCAN, CREATE_SCAN_ERROR, DELETE_SCAN, DELETE_SCAN_ERROR, FETCH_SCANS, FETCH_SCANS_ERROR, UPDATE_SCAN, UPDATE_SCAN_ERROR } from './../types'

const initState = {
    data: [],
    rawData:[],
    error:null
}

const scansReducer = (state=initState, action) =>{
    switch (action.type) {
        case FETCH_SCANS:
            return {...state, data: action.payload.data, rawData:action.payload.rawData}
        case FETCH_SCANS_ERROR:
            return {...state, error: action.payload.error}

        case DELETE_SCAN:
            return state
        case DELETE_SCAN_ERROR:
            return {...state, error: action.payload.error}

        case UPDATE_SCAN:
            return state
        case UPDATE_SCAN_ERROR:
            return {...state, error: action.payload.error}
        case CREATE_SCAN:
            return state
        case CREATE_SCAN_ERROR:
            return {...state, error: action.payload.error}
        default:
            return state;
    }
}

export default scansReducer