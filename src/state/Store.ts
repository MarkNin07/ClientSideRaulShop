import { configureStore } from "@reduxjs/toolkit"
import postsReducer, { stockistType } from './slice/ProviderSlice'
import productReducer from './slice/ProductSlice'

const store = configureStore(
    {
        reducer: {
            stockist: postsReducer,
            product: productReducer           
        }
    }
)
type store = {stockist:stockistType[]}
export type{store}
export default store
