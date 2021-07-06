import React, { useEffect, useState } from "react";
import './pagesStyles/login.css'
import './pagesStyles/loginModal.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from './../redux/actions/authActions'
import { useHistory } from "react-router-dom";
import Backdrop from "../components/confirmationWindow/Backdrop";
import LoginModal from "../components/login/LoginModal";
import ForgotPasswordModal from "../components/login/ForgotPasswordModal";
import ChangePasswordModal from "../components/login/ChangePasswordModal";

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const authError = useSelector(state => state.auth.error)

  const [authState, setAuthState] = useState('login')
  const [codeValidationError, setCodeValidationError] = useState(false)

  const handleLogin = (authData) =>{
    console.log(authData)
  }

  const handleSendCode = (email) =>{
    console.log(email)
  }

  const handleCompareCode = (code) =>{
    console.log('Comparing...', code.split("").reverse().join(""))
    if (code === 'yaspermaglot'){
      setAuthState("change")
    }else{
      setCodeValidationError(true)
    }
  }

  const handleChangePassword = (newPassword) =>{
    console.log('Password succesfully changed!')
    setAuthState('login')
  }

  return (
    <div className='login'>
      <Backdrop />
      {authState === 'login' && <LoginModal handleLogin={handleLogin} setAuthState={setAuthState}/>}
      {authState === 'forgot' && <ForgotPasswordModal codeValidationError={codeValidationError} handleCompareCode={handleCompareCode} handleSendCode={handleSendCode} setAuthState={setAuthState}/>}
      {authState === 'change' && <ChangePasswordModal handleChangePassword={handleChangePassword} setAuthState={setAuthState}/>}
    </div>
  );
}
