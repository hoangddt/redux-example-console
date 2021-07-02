import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './feature/notification/notificationSlice';
import postReducer from './feature/post/postSlice';
import userReducer from './feature/user/userSlice';

export default configureStore({
	reducer: {
		notifications: notificationReducer,
		posts: postReducer,
		users: userReducer
	}
});
