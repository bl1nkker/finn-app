import { CREATE_COWORKER, CREATE_COWORKER_ERROR, DELETE_COWORKER, DELETE_COWORKER_ERROR, FETCH_COWORKERS, UPDATE_COWORKER, UPDATE_COWORKER_ERROR } from '../types'
import { deleteCoworker, getCoworkers, postCoworker, putCoworker } from '../../axios/index'

export const fetchCoworkers = () => async(dispatch) =>{
    try {
        // const { data } = await getCoworkers()
        const data = [
            { profile_picture: "some_picture", full_name: "Иванов Иван Иванович", phone_number: "88005553535", subdivision: "Администрация", payment_type: "Ставка", pay_rate: 5000, address_residing: "Москва. ул. Валынова 106", actual_address: "Москва. ул. Валынова 106", comment: "Хороший админ и конкурсы интересные", is_foreign: true, is_active: true, date_fired: "2020-02-01", facility: 0},
            { profile_picture: "some_picture", full_name: "Марков Марк Маркович", phone_number: "87753378824", subdivision: "Модератор", payment_type: "Ставка", pay_rate: 4000, address_residing: "Москва. ул. Валынова 106", actual_address: "Москва. ул. Валынова 106", comment: "Хороший админ и конкурсы интересные", is_foreign: true, is_active: true, date_fired: "2020-02-01", facility: 0},
            { profile_picture: "some_picture", full_name: "Егоров Егор Егорович", phone_number: "88853828389", subdivision: "Работяга", payment_type: "Ставка", pay_rate: 3000, address_residing: "Москва. ул. Валынова 106", actual_address: "Москва. ул. Валынова 106", comment: "Хороший админ и конкурсы интересные", is_foreign: true, is_active: true, date_fired: "2020-02-01", facility: 0},
            { profile_picture: "some_picture", full_name: "Павлов Павел Пвалович", phone_number: "87019484929", subdivision: "Администрация", payment_type: "Ставка", pay_rate: 1000, address_residing: "Москва. ул. Валынова 106", actual_address: "Москва. ул. Валынова 106", comment: "Хороший админ и конкурсы интересные", is_foreign: true, is_active: true, date_fired: "2020-02-01", facility: 0},
        ]
        dispatch({ type: FETCH_COWORKERS, payload:{ data } })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_COWORKERS, payload:{ error } })
    }
}

export const removeCoworker = (coworkerId) => async(dispatch) =>{
    try {
        await deleteCoworker(coworkerId)
        dispatch({ type:DELETE_COWORKER, payload:{deleted:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:DELETE_COWORKER_ERROR, payload:{error} })
    }
}

export const updateCoworker = (formData, coworkerId) => async(dispatch) =>{
    try {
        await putCoworker(formData, coworkerId)
        dispatch({ type:UPDATE_COWORKER, payload:{updated:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:UPDATE_COWORKER_ERROR, payload:{error} })
    }
}

export const createCoworker = (formData) => async(dispatch) =>{
    try {
        await postCoworker(formData)
        dispatch({ type:CREATE_COWORKER, payload:{created:true} })
    } catch (error) {
        console.log(error)
        dispatch({ type:CREATE_COWORKER_ERROR, payload:{error} })
    }
}