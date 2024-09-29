import store from './store/store'
import {addTask, removeTask,completeTask} from './store/tasks/action'

const unsubscribe = store.subscribe(()=>{
	console.log("updated", store.getState())
})

store.dispatch(addTask("Task1"))
store.dispatch(addTask("Task2"))


unsubscribe()
store.dispatch(completeTask(2))

store.dispatch(removeTask(1))
console.log(store.getState())