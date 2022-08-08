import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../app/types";
import axios from "axios";

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
      const response = await axios.get("/api/users");
      return response.data as users;
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
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<users>) => {
        state.users=action.payload.users
      }
    );
  },
});

export default usersSlice.reducer;
