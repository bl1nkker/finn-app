import { CREATE_INVOICE, CREATE_INVOICE_ERROR, DELETE_INVOICE, DELETE_INVOICE_ERROR, FETCH_INVOICES, FETCH_INVOICES_ERROR, UPDATE_INVOICE, UPDATE_INVOICE_ERROR } from '../types'
import { deleteInvoice, getInvoices, postInvoice, putInvoice } from './../../axios/index'

export const fetchInvoices = () => async(dispatch) => {
    try {
        // Fetch data
        const { data } = await getInvoices()

        // Get dates (unic)
        const tmp = data.map(invoice => invoice.added_at)
        const tmp_2 = data.map(invoice => invoice.importer)

        const unicDates = tmp.filter((item, pos) => tmp.indexOf(item) === pos)

        // Get total and not paid invoices
        const total = data.map( invoice => invoice.amount).reduce((a, b) => a + b, 0)
        const not_paid = data.map(invoice => invoice.is_confirmed === false ? invoice.amount : 0).reduce((a, b) => a + b, 0)
        const companiesList = tmp_2.filter((item, pos) => tmp_2.indexOf(item) === pos)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
            const relatedInvoices = data.filter(invoice => invoice.added_at === date)
            return {date:date, invoices:relatedInvoices}
        })

        dispatch({ type:FETCH_INVOICES, payload:{data:editedData, total, not_paid, companiesList} })        
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

export const removeInvoice = (invoiceId) => async(dispatch) =>{
    try {
        await deleteInvoice(invoiceId)
        dispatch({type: DELETE_INVOICE, payload: {deleted:true}})
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_INVOICE_ERROR, payload: {error:error}})
    }
}