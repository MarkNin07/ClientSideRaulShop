import { configureStore } from "@reduxjs/toolkit"
import postsReducer, { stockistType } from './slice/ProviderSlice'
import productReducer, { productType } from './slice/ProductSlice'
import { billType } from "./slice/BillSlice"
import billReducer from "./slice/BillSlice"
import LoggedInSlice from "./slice/LoggedInSlice"


const store = configureStore(
    {
        reducer: {
            stockist: postsReducer,
            product: productReducer,
            bill: billReducer,
            log: LoggedInSlice       
        }
    }
)
type store = {
    stockist: stockistType[]
    product: productType[]
    bill: billType[]
}

type stateType = ReturnType<typeof store.getState>

export type{stateType}
export default store
