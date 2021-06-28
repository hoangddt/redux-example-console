import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice';
import todoReducer from './feature/todo/todoSlice';


export default configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer
	}
});
