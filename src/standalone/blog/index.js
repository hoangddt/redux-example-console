import store from './store';
import { postAdded } from './feature/post/postSlice';
import { fetchUsers } from './feature/user/userSlice';

import './api/server';


store.subscribe(() => console.log(store.getState()));

// call the normal action
// store.dispatch(postAdded({title: "Entry Post"}));

// call the thunk actions
store.dispatch(fetchUsers());
// console.log(store);
