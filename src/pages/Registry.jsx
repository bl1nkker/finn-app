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

function Registry() {
  const dispatch = useDispatch()
  // select, idle, deselect
  const [selectAll, setSelectAll] = useState({date:false, companyName:false, status:false})
  
  const [rowToEdit, setRowToEdit] = useState(false)

  const [openPopUp, setOpenPopUp] = useState(false)
  const [modalMethod, setModalMethod] = useState('idle')
  const [invoiceToEdit, setInvoiceToEdit] = useState({})

  // Fetched data
  const invoices = useSelector(state => state.invoices.data)

  useEffect(() =>{
    dispatch(fetchInvoices())
  }, [dispatch])

  const handleShowPopUp = (method, invoiceData) =>{
    // method: create, edit, idle
    // console.log(invoiceData);
    setModalMethod(method)
    setInvoiceToEdit(invoiceData)
    setOpenPopUp(true);
  }

  return (
    <div className='table_container'>
      {openPopUp && (
        <>
          <Backdrop />
          <Modal setOpenPopUp={setOpenPopUp} modalMethod={modalMethod} invoiceToEdit={invoiceToEdit}/>
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