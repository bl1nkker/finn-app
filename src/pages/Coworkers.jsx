import React, { useEffect, useState } from 'react'
import './pagesStyles/coworkersModal.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createCoworker, fetchCoworkers, removeCoworker, updateCoworker } from '../redux/actions/coworkersActions'
import Backdrop from '../components/confirmationWindow/Backdrop'
import CoworkersHeader from '../components/coworkers/CoworkersHeader'
import CoworkersDataRow from '../components/coworkers/CoworkersDataRow'
import CoworkersModal from '../components/coworkers/coworkersModal/CoworkersModal'

function Coworkers() {
  const dispatch = useDispatch()
  const coworkers = useSelector(state => state.coworkers.data)

  const [showCoworkerModal, setShowCoworkerModal] = useState(false)
  const [selectedCoworker, setSelectedCoworker] = useState(null)
  // create/edit/idle
  const [modalMethod, setModalMethod] = useState('idle')

  const handleCloseCoworkerModal = () =>{
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
  }

  const handleOpenCoworkerModal = (method, Importer) =>{
    setSelectedCoworker(Importer)
    setModalMethod(method)
    setShowCoworkerModal(true);
  }

  const handleSendCoworker = (formData) =>{
    if (modalMethod === "edit") {
        dispatch(updateCoworker(formData, formData.id))
        console.log(`Editing Coworker...:`, formData);
    }
    else if (modalMethod === "create") {
        dispatch(createCoworker(formData))
        console.log(`Adding Coworker...:`, formData);
    }
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
    // window.location.reload()
  }

  const handleDeleteCoworker = (formData) =>{
    // dispatch(removeCoworker(formData.id))
    console.log('Deleting Coworker...:', formData);
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
    // window.location.reload()
  }

  useEffect(() =>{
    dispatch(fetchCoworkers())
  }, [dispatch])
  return (
    <div className='table_container'>
      {showCoworkerModal && <>
                <Backdrop />
                <CoworkersModal 
                handleDeleteCoworker={handleDeleteCoworker} 
                modalMethod={modalMethod} 
                handleSendCoworker={handleSendCoworker} 
                handleCloseCoworkerModal={handleCloseCoworkerModal} 
                selectedCoworker={selectedCoworker}/>
            </>}
      <CoworkersHeader handleOpenCoworkerModal={handleOpenCoworkerModal}/>
      {coworkers.map((coworker, key) => <CoworkersDataRow handleOpenCoworkerModal={handleOpenCoworkerModal} key={key} coworker={coworker}/>)}
    </div>
  )
}

export default Coworkers
