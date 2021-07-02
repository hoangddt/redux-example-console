import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
	nanoid
} from '@reduxjs/toolkit';
import axios from 'axios';
const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	// const response = await axios.post('https://httpbin.org/post', [{
	// 	id: nanoid(),
	// 	firstName: '',
	// 	name: '',
	// 	lastName: 'Flintstone',
	// 	username: nanoid()
	// }]);
	// console.log("/response.data/", response.data.json);
	// return response.data.json;
	// throw "this will not be fullfilled";
	return [
		{
			id: nanoid(),
			firstName: 'Hoang',
			name: 'Truong V.Q. Hoang',
			lastName: 'Truong',
		}
	];
});

const userSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		userAdded: (state, action) => {
			console.log("/userAdded/: ", action.payload);
			return state;
		}
	},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			console.log("/loading/: ", action);
			state.status = 'loading';
		},
		// [fetchUsers.fullfilled]: usersAdapter.setAll,
		[fetchUsers.fullfilled]: (state, action) => {
			console.log("/fullfilled/: ", action);
			state.status = 'fullfilled';
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		}
	}
});

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;
export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users)

/*
console.log("/usersAdapter/", usersAdapter);
/usersAdapter/ {
	selectId: [Function: selectId],
	sortComparer: false,
	getInitialState: [Function: getInitialState],
	getSelectors: [Function: getSelectors],
	removeAll: [Function: operation],
	addOne: [Function: operation],
	addMany: [Function: operation],
	setOne: [Function: operation],
	setMany: [Function: operation],
	setAll: [Function: operation],
	updateOne: [Function: operation],
	updateMany: [Function: operation],
	upsertOne: [Function: operation],
	upsertMany: [Function: operation],
	removeOne: [Function: operation],
	removeMany: [Function: operation]
}
*/
/*
console.log("/usersAdapter.getSelectors/", usersAdapter.getSelectors());
usersAdapter.getSelectors/ {
	selectIds: [Function: selectIds],
	selectEntities: [Function: selectEntities],
	selectAll: [Function: wrappedSelector],
	selectTotal: [Function: wrappedSelector],
	selectById: [Function: wrappedSelector]
}
*/
