'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectCount = exports.incrementAsync = exports.incrementByAmount = exports.decrement = exports.increment = exports.slice = undefined;

var _toolkit = require('@reduxjs/toolkit');

var slice = exports.slice = (0, _toolkit.createSlice)({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: function increment(state) {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: function decrement(state) {
			state.value -= 1;
		},
		incrementByAmount: function incrementByAmount(state, action) {
			state.value += action.payload;
		}
	}
});

var _slice$actions = slice.actions;
var increment = _slice$actions.increment,
    decrement = _slice$actions.decrement,
    incrementByAmount = _slice$actions.incrementByAmount;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

exports.increment = increment;
exports.decrement = decrement;
exports.incrementByAmount = incrementByAmount;
var incrementAsync = exports.incrementAsync = function incrementAsync(amount) {
	return function (dispatch) {
		setTimeout(function () {
			dispatch(incrementByAmount(amount));
		}, 1000);
	};
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
var selectCount = exports.selectCount = function selectCount(state) {
	return state.counter.value;
};

exports.default = slice.reducer;