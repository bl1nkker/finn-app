import React, { useState } from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import validator from 'validator'


function LoginModal({setAuthError, authError, setAuthState, handleLogin }) {
    const [authForm, setAuthForm] = useState({ email:'', password:'' })
    const [isVisible, setIsVisible] = useState(false)
    const [emailValidationError, setEmailValidationError] = useState(false)
    const [passwordValidationError, setPasswordValidationError] = useState(false)

    const handleLoginButton = () =>{
        if (!validator.isEmail(authForm.email)){
            setEmailValidationError(true)
            
        }else if (authForm.password.length < 8 || authError){
            setAuthError(null)
            setPasswordValidationError(true)
        }
        else{
            handleLogin(authForm)
        }
    }

    return (
        <div className='login_modal_container'>
            <section className='login_header'>
                <span className='header_text'>Войти</span>
            </section>

            <section className='login_inputs'>
                <div className='input_container'>
                    <label className='login_input_label'>E-mail</label>
                    <div className={`login_input_box ${emailValidationError && "validation_error"}`}>
                        <input value={authForm.email} onChange={(event) => setAuthForm({...authForm, email:event.target.value})} type='email'/>
                    </div>

                </div>

                <div className='input_container'>
                    <label className='login_input_label'>Password</label>
                    <div className={`login_input_box ${passwordValidationError && "validation_error"}`}>
                        <button onClick={() => setIsVisible(!isVisible)} 
                                className='visibility_icon'>{isVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                        <input value={authForm.password} 
                        onChange={(event) => setAuthForm({...authForm, password:event.target.value})} 
                        type={isVisible ? "text" : "password"}/>
                    </div>
                </div>

            </section>
            <section className='login_actions'>
                <button onClick={handleLoginButton}>Войти</button>
                <span className='button_send' onClick={() => setAuthState("forgot")}>Забыли пароль?</span>
            </section>
        </div>
    )
}

export default LoginModal
