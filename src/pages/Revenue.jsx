import React, { useEffect, useState } from 'react'
import RevenueDataRow from '../components/revenue/RevenueDataRow'
import RevenueHeader from '../components/revenue/RevenueHeader'
import './pagesStyles/revenueModal.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createRevenue, fetchRevenues, removeRevenue, updateRevenue } from './../redux/actions/revenueActions'
import Backdrop from '../components/confirmationWindow/Backdrop'
import RevenueModal from '../components/revenue/revenueModal.jsx/RevenueModal'

function Revenue() {
  const dispatch = useDispatch()
  const revenues = useSelector(state => state.revenues.data)

  const [showRevenueModal, setShowRevenueModal] = useState(false)
  const [selectedRevenue, setSelectedRevenue] = useState(null)
  // create/edit/idle
  const [modalMethod, setModalMethod] = useState('idle')

  const handleCloseRevenueModal = () =>{
    setSelectedRevenue(null)
    setModalMethod('idle')
    setShowRevenueModal(false);
  }

  const handleOpenRevenueModal = (method, revenue) =>{
    setSelectedRevenue(revenue)
    setModalMethod(method)
    setShowRevenueModal(true);
  }

  const handleSendRevenue = (formData) =>{
    const currentUser = localStorage.getItem("username")
    formData = {...formData, added_by: 1}
    if (modalMethod === "edit") {
        dispatch(updateRevenue(formData, formData.id))
        console.log(`Editing revenue...:`, formData);
    }
    else if (modalMethod === "create") {
        dispatch(createRevenue(formData))
        console.log(`Adding revenue...:`, formData);
    }
    setSelectedRevenue(null)
    setModalMethod('idle')
    setShowRevenueModal(false);
    window.location.reload()
  }

  const handleDeleteRevenue = (formData) =>{
    dispatch(removeRevenue(formData.id))
    console.log('Deleting revenue...:', formData);
    setSelectedRevenue(null)
    setModalMethod('idle')
    setShowRevenueModal(false);
    window.location.reload()
  }

  const handleDownloadInExcel = () =>{
    console.log('Downloading excel file...');
  }

  useEffect(() =>{
    dispatch(fetchRevenues())
  }, [dispatch])
  return (
    <div className='table_container'>
      {showRevenueModal && <>
                <Backdrop />
                <RevenueModal 
                handleDeleteRevenue={handleDeleteRevenue} 
                modalMethod={modalMethod} 
                handleSendRevenue={handleSendRevenue} 
                handleCloseRevenueModal={handleCloseRevenueModal} 
                selectedRevenue={selectedRevenue}/>
            </>}
      <RevenueHeader handleDownloadInExcel={handleDownloadInExcel} handleOpenRevenueModal={handleOpenRevenueModal}/>
      {revenues.map((revenuesByDate, key) => <RevenueDataRow handleOpenRevenueModal={handleOpenRevenueModal} key={key} revenuesByDate={revenuesByDate}/>)}
    </div>
  )
}

export default Revenue
