import { configureStore } from "@reduxjs/toolkit"
import postsReducer, { stockistType } from './slice/ProviderSlice'
import productReducer, { productType } from './slice/ProductSlice'
import { billType } from "./slice/BillSlice"
import billReducer from "./slice/BillSlice"

const store = configureStore(
    {
        reducer: {
            stockist: postsReducer,
            product: productReducer,
            bill: billReducer           
        }
    }
)
type store = {
    stockist: stockistType[]
    product: productType[]
    bill: billType[]
}
export type{store}
export default store
