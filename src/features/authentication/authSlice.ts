import { RootState } from "./../../app/store";
import {
  authFormData,
  authState,
  authApiReturnValue,
  signUpdata,
  signupApiRetunValue,
  editData,
} from "../../app/types";
import {
  loginService,
  signupService,
  editUserService,
} from "services/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
      const respnse = await loginService(userDetails);
      return respnse.data as authApiReturnValue;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (userDetails: signUpdata, thunkAPI) => {
    try {
      const respnse = await signupService(userDetails);
      return respnse.data as signupApiRetunValue;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editUser = createAsyncThunk(
  "auth/edit",
  async (
    { userDetails, token }: { userDetails: editData; token: string },
    thunkAPI
  ) => {
    try {
      const respnse = await editUserService({ userDetails, token });
      return respnse.data;
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
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { foundUser, encodedToken } = action.payload;
        state.userData = foundUser;
        state.username = foundUser.username;
        state.encodedToken = encodedToken;
        state.isAuthenticated = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        const { createdUser, encodedToken } = action.payload;
        state.userData = createdUser;
        state.username = createdUser.username;
        state.encodedToken = encodedToken;
        state.isAuthenticated = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
      });
  },
});
export const { logout } = authSlice.actions;
export const authStateSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
