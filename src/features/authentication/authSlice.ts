import { RootState } from "./../../app/store";
import { authFormData } from "../../app/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { authState, authApiReturnType } from "../../app/types";

const initialState: authState = {
  userData: null,
  username: "",
  isAuthenticated: false,
  error: "",
  encodedToken: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userDetails: authFormData, thunkAPI) => {
    try {
      const respnse = await axios.post("/api/auth/login", userDetails);
      return respnse.data as unknown as authApiReturnType;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      const { foundUser, encodedToken } = action.payload;
      state.userData=foundUser;
      state.username = foundUser.username;
      state.encodedToken = encodedToken;
      state.isAuthenticated = true;
    });
  },
});
export const { logout } = authSlice.actions;
export const authStateSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
