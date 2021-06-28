'use strict';

var _redux = require('redux');

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

var initialState = { value: 0 };

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  console.log("Action received: ", action);
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var store = (0, _redux.createStore)(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(function () {
  return console.log(store.getState());
});

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

// action creators
var increment = function increment() {
  return {
    type: 'counter/incremented'
  };
};

var decrement = function decrement() {
  return {
    type: 'counter/decremented'
  };
};

store.dispatch(increment());
// {value: 1}
store.dispatch(increment());
// {value: 2}
store.dispatch(decrement());
// {value: 1}

// Selector
var selectCounterValue = function selectCounterValue(state) {
  return state.value;
};

var currentValue = selectCounterValue(store.getState());
console.log(currentValue);