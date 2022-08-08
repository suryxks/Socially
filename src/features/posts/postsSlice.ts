import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "app/types";
import axios from "axios";

const initialState: postsType = {
  posts: [],
};
type postsType = {
  posts: post[];
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
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
    });
  },
});

export default postsSlice.reducer;
