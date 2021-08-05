import { useState, useEffect } from 'react'


// Components
import RegistryHeader from "../components/registry/RegistryHeader";
import RegistryDataRow from "../components/registry/RegistryDataRow";
import Backdrop from '../components/confirmationWindow/Backdrop';
import Modal from '../components/popUp/Modal';
// Styles
import './pagesStyles/tableHeader.css'
import './pagesStyles/registryRow.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from './../redux/actions/invoicesActions'
import { fetchImporters } from '../redux/actions/importersActions';

function Registry() {
  const dispatch = useDispatch()
  // select, idle, deselect
  const [selectAll, setSelectAll] = useState({date:false, companyName:false, status:false})

  const [openPopUp, setOpenPopUp] = useState(false)
  const [modalMethod, setModalMethod] = useState('idle')
  const [invoiceToEdit, setInvoiceToEdit] = useState({})

  // Fetched data
  const invoices = useSelector(state => state.invoices.data)
  const importers = useSelector(state => state.importers.data)
  // calendar
  const date = new Date();
  // Select current month (first day and last day)
  const [startDate, setStartDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1).toISOString().substring(0, 10))
  const [endDate, setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().substring(0, 10))

  useEffect(() =>{
    dispatch(fetchInvoices(startDate, endDate))
    dispatch(fetchImporters())
  }, [dispatch, startDate, endDate])

  const handleShowPopUp = (method, invoiceData) =>{
    // method: create, edit, idle
    // console.log(invoiceData);
    setModalMethod(method)
    setInvoiceToEdit(invoiceData)
    setOpenPopUp(true);
  }

  const handleDownloadFile = () =>{
    console.log('Downloading file...');
  }

  return (
    <div className='table_container'>
      {openPopUp && (
        <>
          <Backdrop />
          <Modal importers={importers} setOpenPopUp={setOpenPopUp} modalMethod={modalMethod} invoiceToEdit={invoiceToEdit}/>
        </>
      )}
      <RegistryHeader startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} handleDownloadFile={handleDownloadFile} handleShowPopUp={handleShowPopUp} selectAll={selectAll} setSelectAll={setSelectAll}/>
      {invoices ? 
      invoices.map((invoicesByDate, key) => 
        <RegistryDataRow key={key} 
            handleShowPopUp={handleShowPopUp} 
            invoicesByDate={invoicesByDate} 
            selectAll={selectAll} 
            setSelectAll={setSelectAll}/>)
          :
          <h1>Loading...</h1>}
    </div>
  );
}

export default Registry;