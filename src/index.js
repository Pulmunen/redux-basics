import store from './store/configureStore'
// import {addTask, removeTask,completeTask} from './store/tasks'
import {addEmployee, removeEmployee} from './store/employees'

store.dispatch(addEmployee({name: "Pete Smith"}))
// const unsubscribe = store.subscribe(()=>{
// 	console.log("updated", store.getState())
// })
// // specify the action and its payload (as an object)
// store.dispatch(addTask({task:"Task1"}))
// store.dispatch(addTask({task: "Task2"}))


// unsubscribe()
// store.dispatch(completeTask({id:2}))

// store.dispatch(removeTask({id:1}))
// console.log(store.getState())