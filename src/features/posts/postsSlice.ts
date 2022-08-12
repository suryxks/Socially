import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "app/types";
import axios from "axios";

const initialState: postsType = {
  posts: [],
 
};
type postsType = {
  posts: post[];
};
type postRequest = {
  token: string;
  postContent: string;
};
export const getAllPosts = createAsyncThunk(
  "posts/getallPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data as postsType;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ token, postContent }: postRequest, thunkAPI) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData: postContent },
        { headers: { authorization: token } }
      );
      return response.data as postsType;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const likePost = createAsyncThunk(
  "posts/like",
  async ({ token, postId }: { token: string; postId: string }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async ({ token, postId }: { token: string; postId: string }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      });
  },
});

export default postsSlice.reducer;
