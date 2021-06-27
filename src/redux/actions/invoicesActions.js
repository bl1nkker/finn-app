import { CREATE_INVOICE, CREATE_INVOICE_ERROR, FETCH_INVOICES, FETCH_INVOICES_ERROR, UPDATE_INVOICE, UPDATE_INVOICE_ERROR } from '../types'
import { getInvoices, postInvoice, putInvoice } from './../../axios/index'

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

export const createInvoice = (formData) => async(dispatch) => {
    try {
        await postInvoice(formData)
        dispatch({ type:CREATE_INVOICE, payload:{ created:true } })
    } catch (error) {
        dispatch({ type:CREATE_INVOICE_ERROR, payload:{error} })
    }
}

export const updateInvoice = (invoiceData, invoiceId) => async(dispatch) =>{
    try {
        await putInvoice(invoiceData, invoiceId)
        dispatch({ type: UPDATE_INVOICE, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type: UPDATE_INVOICE_ERROR, payload:{error} })
    }
    
}