import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "../features/authentication/authSlice";
import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/posts/postsSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    users:usersReducer,
    posts:postsReducer,
  },
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch