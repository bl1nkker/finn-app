import React, { useEffect, useState } from "react";
import './pagesStyles/login.css'
import './pagesStyles/loginModal.css'
import Backdrop from "../components/confirmationWindow/Backdrop";
import LoginModal from "../components/login/LoginModal";
import ForgotPasswordModal from "../components/login/ForgotPasswordModal";
import ChangePasswordModal from "../components/login/ChangePasswordModal";

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from './../redux/actions/authActions'
import { useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const error = useSelector(state => state.auth.error)
  const [authError, setAuthError] = useState('')
  
  useEffect(() =>{
    setAuthError(error)
  }, [error])

  const [authState, setAuthState] = useState('login')
  const [codeValidationError, setCodeValidationError] = useState(false)

  const handleLogin = (authData) =>{
    dispatch(loginAction(authData.email, authData.password, history))
  }

  const handleSendCode = (email) =>{
    // Send email to receive validate token
    console.log(email)
  }

  const handleCompareCode = (code) =>{
    // Fetch validate code and compare
    const codeToCompare = code.split("").reverse().join("")
    if (codeToCompare === '123456'){
      setAuthState("change")
    }else{
      setCodeValidationError(true)
    }
  }

  const handleChangePassword = (newPassword) =>{
    // Need to send new password to backend 
    console.log('Password succesfully changed!')
    setAuthState('login')
  }
  console.log(authError)
  return (
    <div className='login'>
      <Backdrop />
      {authState === 'login' && <LoginModal setAuthError={setAuthError} authError={authError} handleLogin={handleLogin} setAuthState={setAuthState}/>}
      {authState === 'forgot' && <ForgotPasswordModal codeValidationError={codeValidationError} handleCompareCode={handleCompareCode} handleSendCode={handleSendCode} setAuthState={setAuthState}/>}
      {authState === 'change' && <ChangePasswordModal handleChangePassword={handleChangePassword} setAuthState={setAuthState}/>}
    </div>
  );
}
