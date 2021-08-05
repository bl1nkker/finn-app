import { CREATE_REVENUE, CREATE_REVENUE_ERROR, DELETE_REVENUE, DELETE_REVENUE_ERROR, FETCH_REVENUES, FETCH_REVENUES_ERROR, UPDATE_REVENUE, UPDATE_REVENUE_ERROR } from './../types'
import { deleteRevenue, getRevenues, postRevenue, putRevenue } from './../../axios/index'

export const fetchRevenues = (added_at_after, added_at_before) => async(dispatch) =>{
    try {
        const { data } = await getRevenues(added_at_after, added_at_before)
        // Get dates (unic)
        const tmp = data.map(invoice => invoice.added_at)
        const unicDates = tmp.filter((item, pos) => tmp.indexOf(item) === pos)

        // Edit data to normal state
        let editedData = unicDates.map(date => {
          let dateRelatedRevenues = data.filter(invoice => invoice.added_at === date)

          // Additional properties
          dateRelatedRevenues = dateRelatedRevenues.map( revenue => ({...revenue, 
            total:revenue.cash_income + revenue.cash_free_income + revenue.np,
            average_table:parseFloat(((revenue.cash_income + revenue.cash_free_income + revenue.np) / revenue.tables).toFixed(2)),
            average_guest:parseFloat(((revenue.cash_income + revenue.cash_free_income + revenue.np) / revenue.guests).toFixed(2)),
          }))
          return {date:date, revenues:dateRelatedRevenues}
        })
        dispatch({ type: FETCH_REVENUES, payload:{ data:editedData, rawData: data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_REVENUES_ERROR, payload:{ error } })
    }
}

export const removeRevenue = (revenueId) => async(dispatch) =>{
    try {
        await deleteRevenue(revenueId)
        dispatch({ type:DELETE_REVENUE, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_REVENUE_ERROR, payload:{error} })
    }
}

export const updateRevenue = (formData, revenueId) => async(dispatch) =>{
    try {
        await putRevenue(formData, revenueId)
        dispatch({ type:UPDATE_REVENUE, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_REVENUE_ERROR, payload:{error} })
    }
}

export const createRevenue = (formData) => async(dispatch) =>{
    try {
        await postRevenue(formData)
        dispatch({ type:CREATE_REVENUE, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_REVENUE_ERROR, payload:{error} })
    }
}