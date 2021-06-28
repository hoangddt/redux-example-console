'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolkit = require('@reduxjs/toolkit');

var _counterSlice = require('./feature/counter/counterSlice');

var _counterSlice2 = _interopRequireDefault(_counterSlice);

var _todoSlice = require('./feature/todo/todoSlice');

var _todoSlice2 = _interopRequireDefault(_todoSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _toolkit.configureStore)({
	reducer: {
		counter: _counterSlice2.default,
		todos: _todoSlice2.default
	}
});