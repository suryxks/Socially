import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../app/types";
import { getUsersService,followUserService,unfollowUserService } from "services/userServices/userServices"; 

interface users {
  users: user[];
}
const initialState: users = {
  users: [],
};
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getUsersService();
      return response.data as users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ userId, token }: { userId: string|undefined; token: string }, thunkAPI) => {
    try {
      const response = await followUserService({userId,token})
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ userId, token }: { userId: string|undefined; token: string }, thunkAPI) => {
    try {
      const response = await unfollowUserService({userId,token})
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<users>) => {
        state.users = action.payload.users;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const { user: currentUser, followUser } = action.payload;
        state.users = state.users.map((user) => {
          if (currentUser._id === user._id) return currentUser;
          if (followUser._id === user._id) return followUser;
          return user;
        });
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const { user: currentUser, followUser } = action.payload;
        state.users = state.users.map((user) => {
          if (currentUser._id === user._id) return currentUser;
          if (followUser._id === user._id) return followUser;
          return user;
        });
      });
  },
});

export default usersSlice.reducer;
