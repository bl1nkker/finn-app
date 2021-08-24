import React, { useEffect, useState } from 'react'
import './pagesStyles/revenueModal.css'
import ScansHeader from '../components/scans/ScansHeader'
import ScansDataRow from '../components/scans/ScansDataRow'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createScan, fetchScans, removeScan, updateScan } from './../redux/actions/scansActions'
import Backdrop from '../components/confirmationWindow/Backdrop'
import ScanModal from '../components/scans/scanModal/ScanModal'


function Scans() {
  const dispatch = useDispatch()
  const scans = useSelector(state => state.scans.data)
  const rawScans = useSelector(state => state.scans.rawData)

  const [showScanModal, setShowScanModal] = useState(false)
  const [selectedScan, setSelectedScan] = useState(null)
  const [scansToDownload, setScansToDownload] = useState([])
  // create/edit/idle
  const [modalMethod, setModalMethod] = useState('idle')
  const [formError, setFormError] = useState(false)
  // calendar
  const date = new Date();
  // Select current month (first day and last day)
  const [startDate, setStartDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1).toISOString().substring(0, 10))
  const [endDate, setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().substring(0, 10))

  useEffect(() =>{
    dispatch(fetchScans(startDate, endDate))
  }, [dispatch, startDate, endDate])

  const handleCloseScanModal = () =>{
    setSelectedScan(null)
    setModalMethod('idle')
    setShowScanModal(false);
    setFormError(false)
  }

  const handleOpenScanModal = (method, revenue) =>{
    setSelectedScan(revenue)
    setModalMethod(method)
    setShowScanModal(true);
  }

  const handleSendScan = (formData) =>{
    // const currentUser = localStorage.getItem("username")
    const _formData = new FormData();
    _formData.append("file", formData.file);
    _formData.append("type_scan", formData.type_scan);
    _formData.append("name", formData.name);
    _formData.append("facility", formData.facility);
    // formData = {...formData, added_by: currentUser}
    if (!formData.file || !formData.type_scan || !formData.name || !formData.facility)
      setFormError(true)
    else{
      if (modalMethod === "edit") {
          dispatch(updateScan(_formData, formData.id))
          console.log(`Editing scan...:`, _formData);
      }
      else if (modalMethod === "create") {
          dispatch(createScan(_formData))
          console.log(`Adding scan...:`, _formData);
      }
      setSelectedScan(null)
      setModalMethod('idle')
      setShowScanModal(false);
      window.location.reload()
    }
  }

  const handleDeleteScan = (formData) =>{
    dispatch(removeScan(formData.id))
    console.log('Deleting scan...:', formData);
    setSelectedScan(null)
    setModalMethod('idle')
    setShowScanModal(false);
    // window.location.reload()
  }

  const handleCheckAllScans = (unChecked) =>{
    if (unChecked){
      setScansToDownload([])
    } else{
      setScansToDownload(rawScans)
    }
  }

  const handleDownloadScans = () =>{
    console.log("Downloading", scansToDownload);
  }

  
  return (
    <div className='table_container'>
      {showScanModal && <>
                <Backdrop />
                <ScanModal 
                formError={formError}
                handleDeleteScan={handleDeleteScan} 
                modalMethod={modalMethod} 
                handleSendScan={handleSendScan} 
                handleCloseScanModal={handleCloseScanModal} 
                selectedScan={selectedScan}/>
            </>}
      <ScansHeader startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} handleCheckAllScans={handleCheckAllScans} handleDownloadScans={handleDownloadScans} handleOpenScanModal={handleOpenScanModal}/>
      {scans.map((scansByDate, key) => <ScansDataRow setScansToDownload={setScansToDownload} scansToDownload={scansToDownload} handleOpenRevenueModal={handleOpenScanModal} key={key} scansByDate={scansByDate}/>)}
    </div>
  )
}

export default Scans
