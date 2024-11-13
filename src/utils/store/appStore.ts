import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer
    }
})

export type StoreState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

export default appStore