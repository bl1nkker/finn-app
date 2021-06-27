import { useState } from 'react'
import RegistryHeader from "../components/registry/RegistryHeader";
import RegistryDataRow from "../components/registry/RegistryDataRow";
import Backdrop from '../components/confirmationWindow/Backdrop';
import './pagesStyles/registryHeader.css'
import './pagesStyles/registryRow.css'
import RegistryModal from '../components/registry/RegistryModal';

const tempData = [{
  date:"09.10.2020",
  subrows:[
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
]},
{
  date:"10.11.2020",
  subrows:[
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text", status:true}
  ]},
{
  date:"11.10.2020",
  subrows:[
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
  ]},
{
  date:"12.10.2020",
  subrows:[
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
      {companyName:'SomeCompany', number:"29945TD", type:"N", sum:112345, nds:1203, comment:"Some fish-text Abracadabra", status:true},
  ]}
]


function Registry() {
  // select, idle, deselect
  const [selectAll, setSelectAll] = useState({date:false, companyName:false, status:false})
  const [openPopUp, setOpenPopUp] = useState(false)
  const [rowToEdit, setRowToEdit] = useState(false)

  const handleShowPopUp = (rowData, rowDate) =>{
    setOpenPopUp(true);
    setRowToEdit(rowData);
    console.log(rowData, rowDate);
  }

  return (
    <div className='registry_container'>
      {openPopUp && (
        <>
          <Backdrop />
          <RegistryModal setOpenPopUp={setOpenPopUp}/>
        </>
      )}
      <RegistryHeader selectAll={selectAll} setSelectAll={setSelectAll}/>
      {tempData.map(row => <RegistryDataRow handleShowPopUp={handleShowPopUp} row={row} selectAll={selectAll} setSelectAll={setSelectAll}/>)}
    </div>
  );
}

export default Registry;