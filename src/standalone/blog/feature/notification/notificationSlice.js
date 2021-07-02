import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit';

const notificationSlice = createSlice({
	name: 'notifications',
	initialState: [],
	reducers: {
	}
});


export default notificationSlice.reducer;
