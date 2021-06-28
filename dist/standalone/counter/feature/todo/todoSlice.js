'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeTodo = exports.updateTodo = exports.addTodo = exports.slice = undefined;

var _toolkit = require('@reduxjs/toolkit');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var slice = exports.slice = (0, _toolkit.createSlice)({
	name: 'todos',
	initialState: [{
		id: 1,
		text: 'commit the redux project',
		completed: false
	}],
	reducers: {
		addTodo: function addTodo(state, action) {
			// console.log("/addTodo/ action: ", action);
			return [].concat(_toConsumableArray(state), [action.payload]);
		},
		updateTodo: function updateTodo(state, action) {
			var index = state.findIndex(function (todo) {
				return todo.id === action.payload.id;
			});
			state[index] = action.payload;
			return state;
		},
		removeTodo: function removeTodo(state, action) {
			return state.filter(function (todo) {
				return todo.id !== action.payload.id;
			});
		}
	}
});

var _slice$actions = slice.actions;
var addTodo = _slice$actions.addTodo,
    updateTodo = _slice$actions.updateTodo,
    removeTodo = _slice$actions.removeTodo;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.removeTodo = removeTodo;
exports.default = slice.reducer;