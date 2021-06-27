import { FETCH_INVOICES, FETCH_INVOICES_ERROR } from '../types'
import { getInvoices } from './../../axios/index'

export const fetchInvoices = () => async(dispatch) => {
    try {
        // Fetch data
        const { data } = await getInvoices()

        // Get dates (unic)
        const tmp = data.map(invoice => invoice.added_at)
        const unicDates = tmp.filter((item, pos) => tmp.indexOf(item) === pos)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
            const relatedInvoices = data.filter(invoice => invoice.added_at === date)
            return {date:date, invoices:relatedInvoices}
        })

        dispatch({ type:FETCH_INVOICES, payload:{data:editedData} })        
    } catch (error) {
        console.log(error)
        dispatch({ type:FETCH_INVOICES_ERROR, payload:{error} })
    }

}