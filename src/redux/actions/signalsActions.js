import { getSignals } from '../../axios'
import { DELETE_ALL_SIGNALS, DELETE_ALL_SIGNALS_ERROR, DELETE_SIGNAL, DELETE_SIGNAL_ERROR, FETCH_SIGNALS, FETCH_SIGNALS_ERROR } from './../types'

export const fetchSignals = () => async(dispatch) =>{
    // When API will be ready, replace this to axios call
    // const data = [
    //     {type:'negative', nutshell: "Сигнал тревоги прозвучал в половине первого ночи.",content: "Сигнал тревоги прозвучал в половине первого ночи. По тревоге было поднято все подразделение полиции. Было установлено, что на крыше одного из домов на территории района Хаммамет в Ницце прогремел мощный и продолжительный звук, напоминающий раскат грома."},
    //     {type:'docs', nutshell: "Неверный документ или вы ошиблись при вводе адреса в форму", content: "Неверный документ или вы ошиблись при вводе адреса в форму, в этом случае вам необходимо сделать выбор на вкладке Адреса в разделе Из других мест."},
    //     {type:'docs', nutshell: "Неверный документ или вы ошиблись при вводе адреса в форму", content: "Неверный документ или вы ошиблись при вводе адреса в форму, в этом случае вам необходимо сделать выбор на вкладке Адреса в разделе Из других мест."},
    //     {type:'inconsistency', nutshell:"Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек", content: "Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек, потому что остальные друзья не пришли."},
    //     {type:'negative', nutshell: "Сигнал тревоги прозвучал в половине первого ночи.", content: "Сигнал тревоги прозвучал в половине первого ночи. По тревоге было поднято все подразделение полиции. Было установлено, что на крыше одного из домов на территории района Хаммамет в Ницце прогремел мощный и продолжительный звук, напоминающий раскат грома."},
    //     {type:'inconsistency', nutshell:"Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек", content: "Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек, потому что остальные друзья не пришли."},
    //     {type:'negative', nutshell: "Сигнал тревоги прозвучал в половине первого ночи.", content: "Сигнал тревоги прозвучал в половине первого ночи. По тревоге было поднято все подразделение полиции. Было установлено, что на крыше одного из домов на территории района Хаммамет в Ницце прогремел мощный и продолжительный звук, напоминающий раскат грома."},
    //     {type:'inconsistency', nutshell:"Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек", content: "Несоответствие - это когда ты в компании с друзьями, а перед тобой сидит только один человек, потому что остальные друзья не пришли."},
    // ]
    const {data} = await getSignals()
    // Distribution (mb not so necessary)
    const negativeBalanceSignals = data.filter(signal => signal.type_signal === '1')
    const checkDocsSignals = data.filter(signal => signal.type_signal === '2')
    const cashInconsistencySignals = data.filter(signal => signal.type_signal === '3')

    try {
        dispatch({ type: FETCH_SIGNALS, payload:{ data, negativeBalanceSignals, checkDocsSignals, cashInconsistencySignals } })
    } catch (error) {
        console.log(error)
        dispatch({ type:FETCH_SIGNALS_ERROR, payload:{error} })
    }
}

export const deleteSignal = (signal) => async(dispatch) =>{
    try {
        dispatch({ type: DELETE_SIGNAL, payload:{ deleted:true } })
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_SIGNAL_ERROR, payload:{error} })
    }
}

export const deleteAllSignals = () => async(dispatch) =>{
    try {
        dispatch({ type: DELETE_ALL_SIGNALS, payload:{ deletedAll:true } })
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_ALL_SIGNALS_ERROR, payload:{error} })
    }
}