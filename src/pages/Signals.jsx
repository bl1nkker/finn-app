import SignalsHeader from '../components/signals/SignalsHeader';
import SignalsList from '../components/signals/SignalsList';
import SignalTypeHeader from '../components/signals/SignalsTypeHeader';
import './pagesStyles/signals.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { deleteSignal, deleteAllSignals, fetchSignals } from './../redux/actions/signalsActions'
import { useEffect, useState } from 'react';
import Backdrop from '../components/confirmationWindow/Backdrop';
import SignalModal from '../components/signals/SignalModal';

function Signals() {
  const negativeBalanceSignals = useSelector(state => state.signals.negativeBalanceSignals)
  const checkDocsSignals = useSelector(state => state.signals.checkDocsSignals)
  const cashInconsistencySignals = useSelector(state => state.signals.cashInconsistencySignals)
  const allSignals = useSelector(state => state.signals.data)
  const dispatch = useDispatch()

  const signalTypes = ["Отрицательный остаток", "Проверить документы", "Несоответствие наличных денег"]

  const [showSignalModal, setShowSignalModal] = useState(false)
  const [selectedSignal, setSelectedModal] = useState({ type:'', nutshell:"", content:"" })

  useEffect(() =>{
    dispatch(fetchSignals())
  }, [dispatch])

  const handleDeleteCard = (signal) =>{
    dispatch(deleteSignal(signal))
    console.log('Deleting card...', signal);
  }

  const handleDeleteAll = () =>{
    dispatch(deleteAllSignals())
    console.log('Deleting everything...');
  }

  const handleOpenSignalModal = (signal) =>{
    setShowSignalModal(true)
    setSelectedModal(signal)
  }

  return (
    <div className='signals_container'>
      {/* Signal Modal */}
      {showSignalModal && <>
        <Backdrop />
        <SignalModal setShowSignalModal={setShowSignalModal} selectedSignal={selectedSignal}/>
      </>}
      {/* Signals Header */}
      <div className='signals_header'>
        <SignalsHeader signalsAmount={allSignals.length} handleDeleteAll={handleDeleteAll}/>
      </div>
      

      {/* Signals sub header with types */}
      <div className='signals_types'>
        <SignalTypeHeader type={"Отрицательный остаток"} signalsAmount={negativeBalanceSignals.length}/>
        <SignalTypeHeader type={"Проверить документы"} signalsAmount={checkDocsSignals.length}/>
        <SignalTypeHeader type={"Несоответствие наличных денег"} signalsAmount={cashInconsistencySignals.length}/>
      </div>
      
      {/* Signals */}
      <div className='signals_list_container'>
        <SignalsList 
        handleOpenSignalModal={handleOpenSignalModal}
        negativeBalanceSignals={negativeBalanceSignals}
        checkDocsSignals={checkDocsSignals}
        cashInconsistencySignals={cashInconsistencySignals}
        handleDeleteCard={handleDeleteCard} 
        signals={allSignals} 
        signalTypes={signalTypes}/>
      </div>
    </div>
  );
}

export default Signals;