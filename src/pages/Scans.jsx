import React, { useEffect, useState } from 'react'
import './pagesStyles/revenueModal.css'
import ScansHeader from '../components/scans/ScansHeader'
import ScansDataRow from '../components/scans/ScansDataRow'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createScan, fetchScans, removeScan, updateScan } from './../redux/actions/scansActions'
import Backdrop from '../components/confirmationWindow/Backdrop'
import ScanModal from '../components/scans/scanModal/ScanModal'


function Revenue() {
  const dispatch = useDispatch()
  const scans = useSelector(state => state.scans.data)

  const [showScanModal, setShowScanModal] = useState(false)
  const [selectedScan, setSelectedScan] = useState(null)
  // create/edit/idle
  const [modalMethod, setModalMethod] = useState('idle')

  const handleCloseScanModal = () =>{
    setSelectedScan(null)
    setModalMethod('idle')
    setShowScanModal(false);
  }

  const handleOpenScanModal = (method, revenue) =>{
    setSelectedScan(revenue)
    setModalMethod(method)
    setShowScanModal(true);
  }

  const handleSendScan = (formData) =>{
    if (modalMethod === "edit") {
        dispatch(updateScan(formData, formData.id))
        console.log(`Editing scan...:`, formData);
    }
    else if (modalMethod === "create") {
        dispatch(createScan(formData))
        console.log(`Adding scan...:`, formData);
    }
    setSelectedScan(null)
    setModalMethod('idle')
    setShowScanModal(false);
    window.location.reload()
  }

  const handleDeleteScan = (formData) =>{
    dispatch(removeScan(formData.id))
    console.log('Deleting scan...:', formData);
    setSelectedScan(null)
    setModalMethod('idle')
    setShowScanModal(false);
    window.location.reload()
  }

  const handleAddScan = (scan) =>{
    console.log('*new scan*', scan);
  }

  useEffect(() =>{
    dispatch(fetchScans())
  }, [dispatch])
  return (
    <div className='table_container'>
      {showScanModal && <>
                <Backdrop />
                <ScanModal 
                handleAddScan={handleAddScan}
                handleDeleteScan={handleDeleteScan} 
                modalMethod={modalMethod} 
                handleSendScan={handleSendScan} 
                handleCloseScanModal={handleCloseScanModal} 
                selectedScan={selectedScan}/>
            </>}
      <ScansHeader handleOpenScanModal={handleOpenScanModal}/>
      {scans.map((scansByDate, key) => <ScansDataRow handleOpenRevenueModal={handleOpenScanModal} key={key} scansByDate={scansByDate}/>)}
    </div>
  )
}

export default Revenue
