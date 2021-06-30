import { LOGIN_USER, LOGIN_USER_ERROR } from './../types'
import { loginUser } from './../../axios/index'

export const loginAction = (email, password, history) => async(dispatch) =>{
    try {
        const { data } = await loginUser(email, password)
        // data = { user: {}, token: ''}
        dispatch({ type: LOGIN_USER, payload:{user: data.user, token:data.token} })
        history.push('/home')
    } catch (error) {
        console.log(error)
        dispatch({ type: LOGIN_USER_ERROR, payload: {error} })
    }
}