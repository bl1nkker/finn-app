import { LOGIN_USER, LOGIN_USER_ERROR } from "../types";

const initState = {
    user:{},
    token:'',
    error:null
}

const authReducer = (state=initState, action) =>{
    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("username", action.payload.user.full_name);
            localStorage.setItem("userEmail", action.payload.user.email);
            localStorage.setItem("isStaff", action.payload.user.is_staff);
            return {...state, user:action.payload.user, token:action.payload.token}
        case LOGIN_USER_ERROR:
            return {...state, error:action.payload.error}
        default:
            return state
    }
}

export default authReducer