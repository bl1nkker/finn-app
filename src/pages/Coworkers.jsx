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
    const _formData = new FormData();
    _formData.append("profile_picture", formData.profile_picture);
    _formData.append("full_name", formData.full_name);
    _formData.append("phone_number", formData.phone_number);
    _formData.append("subdivision", formData.subdivision);
    _formData.append("payment_type", formData.payment_type);
    _formData.append("pay_rate", formData.pay_rate);
    _formData.append("address_residing", formData.address_residing);
    _formData.append("actual_address", formData.actual_address);
    _formData.append("comment", formData.comment);
    _formData.append("is_foreign", formData.is_foreign);
    _formData.append("post", formData.post);
    _formData.append("is_active", formData.is_active);
    _formData.append("date_fired", formData.date_fired);
    _formData.append("birth_date", formData.birth_date);
    // Temp
    _formData.append("facility", formData.facility);
    if (modalMethod === "edit") {
        dispatch(updateCoworker(_formData, formData.id))
        console.log(`Editing Coworker...:`, formData);
    }
    else if (modalMethod === "create") {
        dispatch(createCoworker(_formData))
        console.log(`Adding Coworker...:`, formData);
    }
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
    // window.location.reload()
  }

  const handleDeleteCoworker = (formData) =>{
    dispatch(removeCoworker(formData.id))
    console.log('Deleting Coworker...:', formData);
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
    window.location.reload()
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
