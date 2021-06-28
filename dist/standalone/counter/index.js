'use strict';

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _counterSlice = require('./feature/counter/counterSlice');

var _todoSlice = require('./feature/todo/todoSlice');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register function to be executed each time state changed
_store2.default.subscribe(function () {
	return console.log(_store2.default.getState());
}); // https://redux.js.org/tutorials/essentials/part-2-app-structure

_store2.default.dispatch((0, _counterSlice.increment)());
_store2.default.dispatch((0, _counterSlice.increment)());
_store2.default.dispatch((0, _counterSlice.incrementByAmount)(3));
_store2.default.dispatch((0, _counterSlice.incrementByAmount)(1));

_store2.default.dispatch((0, _todoSlice.addTodo)({ id: 2, text: 'write document', completed: false }));
_store2.default.dispatch((0, _todoSlice.updateTodo)({ id: 2, text: 'write document', completed: true }));
_store2.default.dispatch((0, _todoSlice.addTodo)({ id: 3, text: 'write document 2', completed: false }));
_store2.default.dispatch((0, _todoSlice.removeTodo)({ id: 3 }));

console.log("Done!");