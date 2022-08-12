import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import usersReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";
import modalReducer from "features/modals/modalSlice";
import bookmarksReducer from "features/bookmarks/bookmarksSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    modal: modalReducer,
    bookmarks: bookmarksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
