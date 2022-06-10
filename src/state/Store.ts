import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './slice/ProviderSlice'


const store = configureStore(
    {
        reducer: {
            stockist: postsReducer            
        }
    }
)

export default store
