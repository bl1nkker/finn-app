import { useState, useEffect } from 'react'


// Components
import RegistryHeader from "../components/registry/RegistryHeader";
import RegistryDataRow from "../components/registry/RegistryDataRow";
import Backdrop from '../components/confirmationWindow/Backdrop';
import Modal from '../components/popUp/Modal';
// Styles
import './pagesStyles/registryHeader.css'
import './pagesStyles/registryRow.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from './../redux/actions/invoicesActions'

function Registry() {
  const dispatch = useDispatch()
  // select, idle, deselect
  const [selectAll, setSelectAll] = useState({date:false, companyName:false, status:false})
  
  const [rowToEdit, setRowToEdit] = useState(false)

  const [openPopUp, setOpenPopUp] = useState(false)
  const [modalMethod, setModalMethod] = useState('idle')

  // Fetched data
  const invoices = useSelector(state => state.invoices.data)

  useEffect(() =>{
    dispatch(fetchInvoices())
  }, [dispatch])

  const handleShowPopUp = (method, rowData, rowDate) =>{
    // method: create, edit, idle
    setModalMethod(method)
    setOpenPopUp(true);
  }

  return (
    <div className='registry_container'>
      {openPopUp && (
        <>
          <Backdrop />
          <Modal setOpenPopUp={setOpenPopUp} modalMethod={modalMethod}/>
        </>
      )}
      <RegistryHeader handleShowPopUp={handleShowPopUp} selectAll={selectAll} setSelectAll={setSelectAll}/>
      {invoices.length !== 0 ? 
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