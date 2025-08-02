import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './features/tasks/taskSlice'
//jab-2 ui change hoga control store ke pass aayega yeah reducer ko bhejega then correct logic exection slice
// store ek centralize hub for State-Management
export const Store=configureStore({
    reducer:{
        tasks:taskReducer
    }
})