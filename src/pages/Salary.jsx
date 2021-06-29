import { useState, useEffect } from 'react'

// Components
import SalaryHeader from '../components/salary/SalaryHeader';
// Styles
import './pagesStyles/tableHeader.css'
import './pagesStyles/registryRow.css'
import './pagesStyles/calendar.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from './../redux/actions/invoicesActions'
import SalaryDataRow from '../components/salary/SalaryDataRow';
import SalaryTotalRow from '../components/salary/SalaryTotalRow';
import Backdrop from '../components/confirmationWindow/Backdrop'
import CalendarPersonal from '../components/salary/calendar/CalendarPersonal';
import CalendarShared from '../components/salary/calendar/CalendarShared';

const tempData = [
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Марк Карлович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Стонкс Стонкович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
  {
    name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
    prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
    retention:958, penalty:undefined, total: 40652
  },
]

function Registry() {
  const [showPersonalCalendar, setShowPersonalCalendar] = useState(false)
  const [showSharedCalendar, setShowSharedCalendar] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState({})

  const handleOpenPersonalCalendar = (employee) => {
    setSelectedEmployee(employee)
    setShowPersonalCalendar(true)
  }
  
  const handleClosePersonalCalendar = () =>{
    setSelectedEmployee({})
    setShowPersonalCalendar(false)
  }

  const handleOpenSharedCalendar = () =>{
    setShowSharedCalendar(true)
  }
  const handleCloseSharedCalendar = () =>{
    setShowSharedCalendar(false)
  }

  return (
    <div className='table_container'>
      {/* Personal Calendar */}
      {showPersonalCalendar && <>
        <Backdrop />
        <CalendarPersonal selectedEmployee={selectedEmployee} handleCloseCalendar={handleClosePersonalCalendar}/>
      </>}

      {/* Shared Calendar */}
      {showSharedCalendar && <>
        <Backdrop />
        <CalendarShared employeesList={tempData} handleCloseCalendar={handleCloseSharedCalendar}/>
      </>}
      <SalaryHeader />
      {tempData.map(employee => <SalaryDataRow handleOpenCalendar={handleOpenPersonalCalendar} employee={employee}/>)}
      <SalaryTotalRow handleOpenCalendar={handleOpenSharedCalendar}/>
    </div>
  );
}

export default Registry;