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
  const [formError, setFormError] = useState(false)

  const handleCloseCoworkerModal = () =>{
    setSelectedCoworker(null)
    setModalMethod('idle')
    setShowCoworkerModal(false);
    setFormError(false)
  }

  const handleOpenCoworkerModal = (method, Importer) =>{
    setSelectedCoworker(Importer)
    setModalMethod(method)
    setShowCoworkerModal(true);
  }

  const handleSendCoworker = (formData) =>{
    //{ profile_picture: "", full_name: "", phone_number: "", 
    // subdivision: "", payment_type: "", pay_rate: "", address_residing: "", 
    // actual_address: "", comment: "", is_foreign: false, post:'',
    // is_active: true, date_fired: "", facility: 1, birth_date: ""}
    if (!formData.full_name || !formData.profile_picture || !formData.phone_number ||
      !formData.subdivision || !formData.payment_type || !formData.pay_rate ||
      !formData.address_residing || !formData.actual_address || !formData.comment ||
      !formData.post || !formData.date_fired || !formData.birth_date)
            {setFormError(true)
            console.log(formData)}
    else{
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
                formError={formError}
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
