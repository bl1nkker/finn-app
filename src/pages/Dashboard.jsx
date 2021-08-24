import RemainderConfirmation from "../components/confirmationWindow/RemainderConfirmation";
import {useState} from 'react'
import { Bar } from 'react-chartjs-2'
import SignalModal from "../components/signals/SignalModal";

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchSignals } from './../redux/actions/signalsActions'
import { fetchRevenues } from './../redux/actions/revenueActions'
import { useEffect } from "react";
import Backdrop from "../components/confirmationWindow/Backdrop";

function Dashboard() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const signals = useSelector(state => state.signals.data)
  const revenues = useSelector(state => state.revenues.rawData)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchSignals())
    dispatch(fetchRevenues())
  },[dispatch])

  const [showSignalModal, setShowSignalModal] = useState(false)
  const [selectedSignal, setSelectedModal] = useState({ type:'', nutshell:"", content:"" })

  const handleOpenSignalModal = (signal) =>{
    setShowSignalModal(true)
    setSelectedModal(signal)
  }

  
  const today = new Date()

  // Get revenues for 5 days
  const revenueListForFiveDays = revenues.filter(revenue => 
    (new Date(revenue.added_at).getTime() > new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).getTime())
    && (new Date(revenue.added_at).getTime() < today.getTime()))
  const revenueForFiveDays = revenueListForFiveDays.reduce((accumulator, current) => accumulator + current.cash_income + current.cash_free_income , 0);
  
  // Get revenues for today
  const revenuesForToday = revenues.filter(revenue => 
    (new Date(revenue.added_at).getTime() > new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1).getTime())
    && (new Date(revenue.added_at).getTime() < today.getTime()))
  const revenueForToday = revenuesForToday.reduce((accumulator, current) => accumulator + current.cash_income + current.cash_free_income , 0);
  console.log(revenueForFiveDays)
  return (
    <div style={{ textAlign: "center"}}>
      {/* Confirmation Window (perm) */}
      {!isConfirmed && <RemainderConfirmation setIsConfirmed={setIsConfirmed}/>}
      {showSignalModal && <>
        <Backdrop />
        <SignalModal setShowSignalModal={setShowSignalModal} selectedSignal={selectedSignal}/>
      </>}

      <main className="container home__container">
        {/* Signals */}
        <div className="home__signals">
          <div className="signals__box">Сигналы <span>{signals.length}</span></div>
            <div className="home__warning-cards">
              {signals.map((signal, id) =>
                <div key={id} className="home__warning-card">
                  <div className="warning__card-title">Внимание!<button onClick={() => handleOpenSignalModal(signal)} className='more_button'>Подробнее</button></div>
                  <div className="warning__card-content">{signal.nutshell}</div>
                </div>)}
            </div>
        </div>

        {/* BarPlot */}
        <div className="home__infographic">
          <div className="info">
            <Bar
              data={{
                labels: ['January', 'February', 'March',
                         'April', 'May'],
                datasets: [
                  {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                  }
                ]
              }}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
          <div className="info__cards">
            <div className="info__card">
              <div className="info__card-title">Выручка за последние 5 дней</div>
              <h3 className="info__title">{revenueForFiveDays.toFixed(2)} ₽</h3>
            </div>
            <div className="info__card">
              <div className="info__card-title">Выручка за день</div>
              <h3 className="info__title">{revenueForToday.toFixed(2)} ₽</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
