import taskReducer from './tasks'
import employeeReducer from './employees'
import {configureStore} from '@reduxjs/toolkit'
 
const store = configureStore({
	reducer:{
	tasks:taskReducer,
	employees:employeeReducer
	}
})



export default store