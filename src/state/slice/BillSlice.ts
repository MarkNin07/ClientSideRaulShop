import { createSlice } from "@reduxjs/toolkit";

type billType = {
    billId: string,
    date: string,
    clientName: string,
    salesPerson: string,
    totalBill: number,
    productName: string
}

const initialState:billType[] = [
    {
        billId: '',
        date: '',
        clientName: '',
        salesPerson: '',
        totalBill: 0,
        productName: ''
    }
]

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        addBill(state, action){
            state.push(action.payload)
        },
        getAllBills(state, action){
            return action.payload;
        }
    }
})

export const {addBill, getAllBills} = billSlice.actions

export default billSlice.reducer

export type {billType}