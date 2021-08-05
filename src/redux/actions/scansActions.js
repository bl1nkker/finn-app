import { CREATE_SCAN, CREATE_SCAN_ERROR, DELETE_SCAN, DELETE_SCAN_ERROR, FETCH_SCANS, FETCH_SCANS_ERROR, UPDATE_SCAN, UPDATE_SCAN_ERROR } from './../types'
import { deleteScan, getScans, postScan, putScan } from './../../axios/index'

export const fetchScans = (added_at_after, added_at_before) => async(dispatch) => {
    try {
        const { data } = await getScans(added_at_after, added_at_before)
        // Get dates (unic)
        const tmp = data.map(invoice => invoice.added_at)
        const unicDates = tmp.filter((item, pos) => tmp.indexOf(item) === pos)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
            let dateRelatedData = data.filter(invoice => invoice.added_at === date)
            return {date:date, scans:dateRelatedData}})

        dispatch({ type: FETCH_SCANS, payload:{ data: editedData, rawData:data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_SCANS_ERROR, payload: { error } })
    }
}

export const createScan = (formData) => async(dispatch) =>{
    try {
        await postScan(formData)
        dispatch({ type: CREATE_SCAN, payload: { created:true } })
    } catch (error) {
        console.log(error)
        dispatch({ type: CREATE_SCAN_ERROR, payload: { error } })
    }
}

export const updateScan = (formData, scanId) => async(dispatch) =>{
    try {
        await putScan(formData, scanId)
        dispatch({ type: UPDATE_SCAN, payload: { updated:true } })
    } catch (error) {
        console.log(error)
        dispatch({ type: UPDATE_SCAN_ERROR, payload: { error } })
    }
}

export const removeScan = (scanId) => async(dispatch) =>{
    try {
        await deleteScan(scanId)
        dispatch({ type: DELETE_SCAN, payload: { deleted:true } })
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_SCAN_ERROR, payload: { error } })
    }
}