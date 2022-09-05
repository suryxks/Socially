import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentRequest, post, postRequest, deleteCommentRequest } from "app/types";
import {
  likePostService,
  dislikePostService,
  deletePostService,
  getPostsService,
  addCommentService,
  deleteCommentService,
  createPostService
} from "services/postServices/postActionServices";


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
      const response = await getPostsService();
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
      const response = await createPostService({ token, postContent })
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
      const { data } = await likePostService({token,postId})
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
      const { data } = await dislikePostService({token,postId})
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deletePost = createAsyncThunk(
  "posts/delete",
  async ({ token, postId }: { token: string; postId: string }, thunkAPI) => {
    try {
      const { data } = await deletePostService({token,postId})
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const postComment = createAsyncThunk(
  "posts/addComment",
  async ({ commentData, token, postId }: commentRequest, thunkAPI) => {
    try {
      const response = await addCommentService({commentData,token,postId})
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ token, postId, commentId }: deleteCommentRequest, thunkAPI) => {
    try {
      const response = await deleteCommentService({token,postId,commentId})
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
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
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      }).addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      });
  },
});

export default postsSlice.reducer;
