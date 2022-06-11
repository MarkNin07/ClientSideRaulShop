import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type productType = {
    productId: string,
    productName: string,
    price: number,
    description: string,
    minProdAmount: number,
    maxProdAmount: number,
    unitsAvailable: number,
    stockistName: string
}

const initialState:productType[] = [
    {
        productId: '',
        productName: '',
        price: 0,
        description: '',
        minProdAmount: 0,
        maxProdAmount: 0,
        unitsAvailable: 0,
        stockistName: ''
    }
]

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action){
            state.push(action.payload)
        },
        getAllProducts(state, action){
            return action.payload;
        },
        deleteProduct(state, action:PayloadAction<string>){
            const newProdList = state.filter((prod) => prod.productId != action.payload);
            return newProdList
        }
    }
})

export const {addProduct, getAllProducts, deleteProduct} = productSlice.actions

export default productSlice.reducer

export type {productType}