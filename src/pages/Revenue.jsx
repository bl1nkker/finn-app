import React, { useEffect } from 'react'
import RevenueDataRow from '../components/revenue/RevenueDataRow'
import RevenueHeader from '../components/revenue/RevenueHeader'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchRevenues } from './../redux/actions/revenueActions'
function Revenue() {
  const dispatch = useDispatch()
  const revenues = useSelector(state => state.revenues.data)

  useEffect(() =>{
    dispatch(fetchRevenues())
  }, [dispatch])
  return (
    <div className='table_container'>
      <RevenueHeader />

      {revenues.map((revenuesByDate, key) => <RevenueDataRow key={key} revenuesByDate={revenuesByDate}/>)}
    </div>
  )
}

export default Revenue
