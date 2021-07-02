import { CREATE_SCAN, CREATE_SCAN_ERROR, DELETE_SCAN, DELETE_SCAN_ERROR, FETCH_SCANS, FETCH_SCANS_ERROR, UPDATE_SCAN, UPDATE_SCAN_ERROR } from './../types'
import { deleteScan, getScans, postScan, putScan } from './../../axios/index'

export const fetchScans = () => async(dispatch) => {
    try {
        // const { data } = await getScans()

        // Temp Data
        const tempRevenues = [
            {id: 1, type_scan: "1", added_at: "2021-06-16", name: "File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 2, type_scan: "1", added_at: "2020-02-19", name: "Creative File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 3, type_scan: "1", added_at: "2020-02-19", name: "Great File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 4, type_scan: "1", added_at: "2020-02-19", name: "Next File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 5, type_scan: "1", added_at: "2019-11-30", name: "Some File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 6, type_scan: "1", added_at: "2019-11-30", name: "Old File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 7, type_scan: "1", added_at: "2019-11-30", name: "Anither Old File Name", file: "/media/arrow-down-red.svg", facility: 1},
            {id: 8, type_scan: "1", added_at: "2019-11-30", name: "And another File Name", file: "/media/arrow-down-red.svg", facility: 1},
        ]
        // Get dates (unic)
        const tmp = tempRevenues.map(invoice => invoice.added_at)
        const unicDates = tmp.filter((item, pos) => tmp.indexOf(item) === pos)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
            let dateRelatedData = tempRevenues.filter(invoice => invoice.added_at === date)
            return {date:date, scans:dateRelatedData}})

        dispatch({ type: FETCH_SCANS, payload:{ data: editedData } })
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