import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getBills from '../actions/get/GetBills'
import { billType, getAllBills } from '../state/slice/BillSlice'
import store from '../state/Store'


const BillsList = () => {

    const dispatch = useDispatch()

    const getBillsInfo = useSelector((state:store) => state.bill)

    useEffect(() => {
        getBills().then(
            (bills) => {
                dispatch(getAllBills(bills))
            }
        )
    }, [])


  return (
    <div>
        <h1>List of all Bills</h1>
        <ul>
            {getBillsInfo.map((bill: billType, index) =>
            <li key={index}> 
                {bill.billId} {bill.date} {bill.salesPerson} {bill.clientName} {bill.totalBill}
            </li> )}
        </ul>

    </div>
  )
}

export default BillsList