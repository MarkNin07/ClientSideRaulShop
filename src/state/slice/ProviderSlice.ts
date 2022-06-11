import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type stockistType = {
    stockistId : string,
    stockistName : string,
    stockistPersonalId : string,
    phoneNumber : string
}

const initialState:stockistType[] = [
    {
        stockistId: '',
        stockistName: '',
        stockistPersonalId: '',
        phoneNumber: ''
    }
]


const stockistSlice = createSlice({
    name: 'stockist',
    initialState,
    reducers: {
        addStockist(state, action){
            state.push(action.payload);
        },
        getAllStockists(state, action){
            return action.payload;
        },
        deleteStockist(state, action: PayloadAction<string>){
            const newProvList = state.filter((prov) => prov.stockistId != action.payload);
            return newProvList
        }
    }
})

export const {addStockist, getAllStockists, deleteStockist} = stockistSlice.actions

export default stockistSlice.reducer

export type {stockistType}