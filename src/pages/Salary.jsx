import { useState, useEffect } from 'react'

// Components
import SalaryHeader from '../components/salary/SalaryHeader';
// Styles
import './pagesStyles/tableHeader.css'
import './pagesStyles/registryRow.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from './../redux/actions/invoicesActions'
import SalaryDataRow from '../components/salary/SalaryDataRow';
import SalaryTotalRow from '../components/salary/SalaryTotalRow';

const tempData = [
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
// Get the day of the week
// Here we will define out day of the week
console.log(new Date(2021, 5, 28).getDay());

// Get the total days of the month (!)
// Here we will make for loop for current month (starts with 0)
console.log(33 - new Date(2021, 5, 33).getDate());
function Registry() {
  return (
    <div className='table_container'>
      <SalaryHeader />
      {tempData.map(employee => <SalaryDataRow employee={employee}/>)}
      <SalaryTotalRow />
    </div>
  );
}

export default Registry;