// https://redux.js.org/tutorials/essentials/part-2-app-structure

import store from './store';
import {
	increment,
	decrement,
	incrementByAmount,
	incrementAsync
} from './feature/counter/counterSlice';
import {
	addTodo,
	updateTodo,
	removeTodo
} from './feature/todo/todoSlice';

// register function to be executed each time state changed
store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementByAmount(3));
store.dispatch(incrementByAmount(1));

store.dispatch(addTodo({id: 2, text: 'write document', completed: false}));
store.dispatch(updateTodo({id: 2, text: 'write document', completed: true}));
store.dispatch(addTodo({id: 3, text: 'write document 2', completed: false}));
store.dispatch(removeTodo({id: 3}));

console.log("Done!")
