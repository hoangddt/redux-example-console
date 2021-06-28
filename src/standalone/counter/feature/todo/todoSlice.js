import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'todos',
	initialState: [
		{
			id: 1,
			text: 'commit the redux project',
			completed: false
		}
	],
	reducers: {
		addTodo: (state, action) => {
			// console.log("/addTodo/ action: ", action);
			return [...state, action.payload];
		},
		updateTodo: (state, action) => {
			let index = state.findIndex(todo => todo.id === action.payload.id);
			state[index] = {...state[index], ...action.payload};
			return state;
		},
		removeTodo: (state, action) => {
			return state.filter(todo => todo.id !== action.payload.id);
		}
	}
});


export const { addTodo, updateTodo, removeTodo } = slice.actions;
export default slice.reducer;
