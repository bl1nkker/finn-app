import { CREATE_IMPORTER, CREATE_IMPORTER_ERROR, DELETE_IMPORTER, DELETE_IMPORTER_ERROR, FETCH_IMPORTERS, FETCH_IMPORTERS_ERROR, UPDATE_IMPORTER, UPDATE_IMPORTER_ERROR } from '../types'
import { deleteImporter, getImporters, postImporter, putImporter } from '../../axios/index'

export const fetchImporters = () => async(dispatch) =>{
    try {
        const { data } = await getImporters()

        // Temp data
        // const data = [
        //     { company_name: "ООО Джи Эф Си", bank_name: "Астра Банк", correspondent_account: "Some C_account", inn: "0102939423", bik: "0102939423", expense_account: "Some E_account", production_type: "Овощи", custom_production_type: "Машины", comment: "Крутая компания по продаже овощей", is_deleted: true, facility: 0},
        //     { company_name: "ООО Джи Эф Си", bank_name: "Астра Банк", correspondent_account: "Some C_account", inn: "0102939423", bik: "0102939423", expense_account: "Some E_account", production_type: "Овощи", custom_production_type: "Машины", comment: "Крутая компания по продаже овощей", is_deleted: true, facility: 0},
        //     { company_name: "ООО Джи Эф Си", bank_name: "Астра Банк", correspondent_account: "Some C_account", inn: "0102939423", bik: "0102939423", expense_account: "Some E_account", production_type: "Овощи", custom_production_type: "Машины", comment: "Крутая компания по продаже овощей", is_deleted: true, facility: 0},
        //     { company_name: "ООО Джи Эф Си", bank_name: "Астра Банк", correspondent_account: "Some C_account", inn: "0102939423", bik: "0102939423", expense_account: "Some E_account", production_type: "Овощи", custom_production_type: "Машины", comment: "Крутая компания по продаже овощей", is_deleted: true, facility: 0},
        //     { company_name: "ООО Джи Эф Си", bank_name: "Астра Банк", correspondent_account: "Some C_account", inn: "0102939423", bik: "0102939423", expense_account: "Some E_account", production_type: "Овощи", custom_production_type: "Машины", comment: "Крутая компания по продаже овощей", is_deleted: true, facility: 0},
        // ]

        dispatch({ type: FETCH_IMPORTERS, payload:{ data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_IMPORTERS_ERROR, payload:{ error } })
    }
}

export const removeImporter = (importerId) => async(dispatch) =>{
    try {
        await deleteImporter(importerId)
        dispatch({ type:DELETE_IMPORTER, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_IMPORTER_ERROR, payload:{error} })
    }
}

export const updateImporter = (formData, importerId) => async(dispatch) =>{
    try {
        await putImporter(formData, importerId)
        dispatch({ type:UPDATE_IMPORTER, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_IMPORTER_ERROR, payload:{error} })
    }
}

export const createImporter = (formData) => async(dispatch) =>{
    try {
        await postImporter(formData)
        dispatch({ type:CREATE_IMPORTER, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_IMPORTER_ERROR, payload:{error} })
    }
}