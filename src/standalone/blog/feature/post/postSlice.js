import {
	createSlice,
	createAsyncThunk,
	nanoid,
	createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../api/client'


const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts');
  return response.posts;
})


const postSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		postAdded: (state, action) => {
			console.log("/postAdded/: ", action.payload);
			state.posts.push(action.payload);
		}
	}
});


// selector
export const selectAllposts = state => state.posts;
export const selectPostById = (state, postId) =>
	state.posts.find(post => post.id === postId);

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
