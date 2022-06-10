import { createSlice } from "@reduxjs/toolkit";


type stockistType = {
    stockistId : string,
    stockistName : string,
    stockistPersonalId : string,
    phoneNumber : string
}

const initialState:stockistType[] = [
    {
        stockistId: '1',
        stockistName: 'Alan Brito',
        stockistPersonalId: '456JDK',
        phoneNumber: '1954890765'
    }
]


const stockistSlice = createSlice({
    name: 'stockist',
    initialState,
    reducers: {
        addStockist(state, action){
            state.push(action.payload);
        },
        getAllStockist(state, action){
            state.push(action.payload);
        },
        deleteStockist(state, action){
            state.push(action.payload);
        }
    }
})

export const {addStockist, getAllStockist, deleteStockist} = stockistSlice.actions

export default stockistSlice.reducer

export type {stockistType}