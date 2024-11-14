import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import configReducer from './configSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        config:configReducer
    }
})

export type StoreState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

export default appStore