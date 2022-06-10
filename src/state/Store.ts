import { configureStore } from "@reduxjs/toolkit"
import postsReducer, { stockistType } from './slice/ProviderSlice'


const store = configureStore(
    {
        reducer: {
            stockist: postsReducer            
        }
    }
)
type store = {stockist:stockistType[]}
export type{store}
export default store
