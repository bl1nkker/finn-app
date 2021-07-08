import { CREATE_REVENUE, CREATE_REVENUE_ERROR, DELETE_REVENUE, DELETE_REVENUE_ERROR, FETCH_REVENUES, FETCH_REVENUES_ERROR, UPDATE_REVENUE, UPDATE_REVENUE_ERROR } from './../types'
import { deleteRevenue, getRevenues, postRevenue, putRevenue } from './../../axios/index'

export const fetchRevenues = () => async(dispatch) =>{
    try {
        const { data } = await getRevenues()
        // Temp Data
        // const tempRevenues = [
        //         { id: 11, cash_income: 1276, cash_free_income: 5435, np: 457, tables: 30, guests: 150, added_at: "2020-03-30", added_by: 0, facility: 0},
        //         { id: 12, cash_income: 4324, cash_free_income: 435, np: 4212, tables: 40, guests: 120, added_at: "2020-03-30", added_by: 0, facility: 0},
        //         { id: 13, cash_income: 23456, cash_free_income: 12356, np: 656, tables: 50, guests: 200, added_at: "2020-11-31", added_by: 0, facility: 0},
        //         { id: 14, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2020-11-31", added_by: 0, facility: 0},
        //         { id: 21, cash_income: 1276, cash_free_income: 5435, np: 457, tables: 30, guests: 150, added_at: "2020-11-31", added_by: 0, facility: 0},
        //         { id: 22, cash_income: 4324, cash_free_income: 435, np: 4212, tables: 40, guests: 120, added_at: "2020-11-31", added_by: 0, facility: 0},
        //         { id: 23, cash_income: 23456, cash_free_income: 12356, np: 656, tables: 50, guests: 200, added_at: "2021-09-19", added_by: 0, facility: 0},
        //         { id: 24, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-01-19", added_by: 0, facility: 0},
        //         { id: 31, cash_income: 1276, cash_free_income: 5435, np: 457, tables: 30, guests: 150, added_at: "2020-07-08", added_by: 0, facility: 0},
        //         { id: 32, cash_income: 4324, cash_free_income: 435, np: 4212, tables: 40, guests: 120, added_at: "2020-07-08", added_by: 0, facility: 0},
        //         { id: 33, cash_income: 23456, cash_free_income: 12356, np: 656, tables: 50, guests: 200, added_at: "2020-07-08", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-12-05", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-07-05", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-07-04", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-07-03", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-07-02", added_by: 0, facility: 0},
        //         { id: 34, cash_income: 64565, cash_free_income: 23452, np: 7897, tables: 100, guests: 300, added_at: "2021-07-01", added_by: 0, facility: 0},
        //   ]
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