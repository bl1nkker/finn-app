import React, { useState, useRef, useEffect, useReducer } from 'react'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import validator from 'validator'

function ForgotPasswordModal({ codeValidationError, handleCompareCode, handleSendCode, setAuthState }) {
    const [email, setEmail] = useState('')
    const [codeIsSend, setCodeIsSend] = useState(false)
    const [inputCode, setInputCode] = useState({first:'', second:'', third:'', fourth:'', fifth:'', sixth:''})
    const [emailValidationError, setEmailValidationError] = useState(false)

    // Timer
    const [timer, setTimer] = useState(0)
    const [seconds, setSeconds] = useState(120)
    const [timerOnCoolDown, settimerOnCoolDown] = useState(false)
    useEffect(() => {
        if (seconds <= 0){
            clearInterval(timer)
            setTimer(0)
            settimerOnCoolDown(false)
            setSeconds(120)
        }
    }, [seconds])

    const startTimer = () =>{
        if (timer === 0 && seconds !== 0) {
            setTimer(setInterval(() => setSeconds(secs => secs - 1), 1000))
            settimerOnCoolDown(true)
        }
    }


    const firstSymbol = useRef()
    const secondSymbol = useRef()
    const thirdSymbol = useRef()
    const fourthSymbol = useRef()
    const fifthSymbol = useRef()
    const sixthSymbol = useRef()
    const button = useRef()

    const handleSendCodeButton = () =>{
        if (codeIsSend){
            startTimer()
        }
        
        if (validator.isEmail(email)){
            handleSendCode(email)
            setCodeIsSend(true)
            setInputCode({first:'', second:'', third:'', fourth:'', fifth:'', sixth:''})
        }else{
            setEmailValidationError(true)
        }
    }

    const switchToNext = (current, next) =>{
        if (current.current.value.length){
            next.current.focus()
        }
    }
    return (
        <div className='login_modal_container'>
            <section className='login_header'>
                <span className='header_text'>Восстановление пароля</span>
                <button onClick={() => setAuthState("login")} className='close_button'><CloseOutlinedIcon /></button>
            </section>
            {!codeIsSend ?
            (
                <>
                    <section className='login_inputs'>
                        <div className='input_container'>
                            <p className='input_hint'>Адрес электронной почты аккаунта CRM</p>
                        </div>

                        <div className='input_container'>
                            <label className='login_input_label'>E-mail</label>
                            <div className={`login_input_box ${emailValidationError && "validation_error"}`}>
                                <input value={email} onChange={(event) => setEmail(event.target.value)} type='email'/>
                            </div>
                        </div>
                    </section>
                    <section className='login_actions'>
                        <button onClick={handleSendCodeButton}>Отправить код</button>
                    </section>
                </>)
                :
                (<>
                    <section className='login_inputs'>
                        <div className='input_container'>
                            <p className='input_hint'>Введите код который мы вам отправили на адрес {email}</p>
                        </div>

                        <div className='input_container'>
                            <div className='input_otp'>
                                <input className={codeValidationError && 'validation_error'} maxLength="1" value={inputCode.first} ref={firstSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, first:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(firstSymbol, secondSymbol)}
                                    />
                                <input className={codeValidationError && 'validation_error'} maxLength='1' value={inputCode.second} ref={secondSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, second:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(secondSymbol, thirdSymbol)}
                                    />
                                <input className={codeValidationError && 'validation_error'} maxLength='1' value={inputCode.third} ref={thirdSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, third:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(thirdSymbol, fourthSymbol)}
                                    />
                                <input className={codeValidationError && 'validation_error'} maxLength='1' value={inputCode.fourth} ref={fourthSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, fourth:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(fourthSymbol, fifthSymbol)}
                                    />
                                <input className={codeValidationError && 'validation_error'} maxLength='1' value={inputCode.fifth} ref={fifthSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, fifth:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(fifthSymbol, sixthSymbol)}
                                    />
                                <input className={codeValidationError && 'validation_error'} maxLength='1' value={inputCode.sixth} ref={sixthSymbol} 
                                    onChange={(event) => setInputCode({...inputCode, sixth:event.target.value})}
                                    type='text' onKeyUp={() => switchToNext(sixthSymbol, button)}
                                    />
                            </div>
                        </div>
                    </section>
                    <section className='login_actions'>
                        <button ref={button} onClick={() => handleCompareCode(Object.values(inputCode).reduce((acc, value) => value + acc, ''))}>Подтвердить код</button>
                        {timerOnCoolDown ? 
                        <span className='button_cooldown'>Отправить код повторно через: {Math.floor(seconds / 60)}:{Math.ceil(seconds % 60)}</span> : 
                        <span className='button_send' onClick={handleSendCodeButton}>Отправить код повторно</span>}
                        
                        
                    </section>
                </>
            )}
            
        </div>
    )
}

export default ForgotPasswordModal
