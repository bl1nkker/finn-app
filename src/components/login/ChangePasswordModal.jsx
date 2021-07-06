import React, { useState } from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function ChangePasswordModal({ setAuthState, handleChangePassword }) {
    const [changePassword, setChangePassword] = useState({ password:'', confirmPassword:'' })
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] = useState(false)
    const [passwordValidationError, setPasswordValidationError] = useState(false)

    const validatePasswordsHandler = () =>{
        if (changePassword.password.length < 8){
            setPasswordValidationError('short')
        }else if (changePassword.password !== changePassword.confirmPassword){
            setPasswordValidationError("not_equal")
        }else{
            handleChangePassword(changePassword.password)
        }
    }

    return (
        <div className='login_modal_container'>
            <section className='login_header'>
                <span className='header_text'>Обновите пароль</span>
                <button onClick={() => setAuthState("login")} className='close_button'><CloseOutlinedIcon /></button>
            </section>

            <section className='login_inputs'>
            <div className='input_container'>
                    <label className='login_input_label'>Пароль</label>
                    <div className={`login_input_box ${passwordValidationError === 'short' && "validation_error"}`}>
                        <button onClick={() => setPasswordIsVisible(!passwordIsVisible)} 
                                className='visibility_icon'>{passwordIsVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                        <input value={changePassword.password} 
                        onChange={(event) => setChangePassword({...changePassword, password:event.target.value})} 
                        type={passwordIsVisible ? "text" : "password"}/>
                    </div>
                </div>

                <div className='input_container'>
                    <label className='login_input_label'>Повторите пароль</label>
                    <div className={`login_input_box ${passwordValidationError === 'not_equal' && "validation_error"}`}>
                        <button onClick={() => setConfirmPasswordIsVisible(!confirmPasswordIsVisible)} 
                                className='visibility_icon'>{confirmPasswordIsVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                        <input value={changePassword.confirmPassword} 
                        onChange={(event) => setChangePassword({...changePassword, confirmPassword:event.target.value})} 
                        type={confirmPasswordIsVisible ? "text" : "password"}/>
                    </div>
                </div>

            </section>
            <section className='login_actions'>
                <button onClick={validatePasswordsHandler}>Обновите пароль</button>
            </section>
        </div>
    )
}

export default ChangePasswordModal
