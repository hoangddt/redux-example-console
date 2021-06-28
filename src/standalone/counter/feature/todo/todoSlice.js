import { createSlice, nanoid } from '@reduxjs/toolkit';

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
		addTodo: {
			reducer(state, action) {
				// check if id is duplicated here
				return [...state, action.payload];
			},
			// https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads
			prepare({id, text, completed}) {
				id = (typeof id !== 'undefined') ? id : nanoid();
				completed = (typeof completed !== 'undefined') ? completed : false;
				return {
					payload: {
						id: id,
						text,
						completed
					}
				}
			}
		},
		updateTodo: (state, action) => {
			let index = state.findIndex(todo => todo.id === action.payload.id);
			if (index > -1) {
				state[index] = {...state[index], ...action.payload};
			};
			return state;
		},
		removeTodo: (state, action) => {
			return state.filter(todo => todo.id !== action.payload.id);
		}
	}
});


export const { addTodo, updateTodo, removeTodo } = slice.actions;
export default slice.reducer;
