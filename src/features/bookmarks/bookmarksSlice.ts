import { RootState } from "app/store";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "app/types";

type bookMarksType = {
  bookmarks: post[];
};
const initialState: bookMarksType = {
  bookmarks: [],
};
export const getAllBookmarks = createAsyncThunk(
  "bookmarks/getBookMarks",
  async (token: string, thunkAPI) => {
    try {
      const response = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToBookmarks = createAsyncThunk(
  "bookmarks/addToBookMarks",
  async ({ token, postId }: { token: string; postId: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const removeFromBookmarks = createAsyncThunk(
  "bookmarks/removeFromBookMarks",
  async ({ token, postId }: { token: string; postId: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(getAllBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      });
  },
});
export const bookMarksSelector = (state: RootState) =>
  state.bookmarks.bookmarks;
export default bookmarksSlice.reducer;
