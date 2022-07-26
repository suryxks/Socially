import { RootState } from './../../app/store';
import { authFormData } from "../../pages/LoginPage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

interface authState {
  //   name: string;
  username: string;
  isAuthenticated: boolean;
  error: string;
  encodedToken: string;
}
interface user {
  bio: string;
  bookmarks: [];
  createdAt: string;
  firstName: string;
  followers: [];
  following: [];
  id: string;
  lastName: string;
  password: string;
  updatedAt: string;
  username: string;
  _id: string;
}
interface authApiReturnType {
  foundUser: user;
  encodedToken: string;
}

const initialState: authState = {
  username: "",
  isAuthenticated: false,
  error: "",
  encodedToken: "",
};
// interface MyData{
// user:user,
// encodedToken:string
// }
export const login = createAsyncThunk(
  "auth/login",
  async (userDetails: authFormData, thunkAPI) => {
    try {
      const respnse = await axios.post("/api/auth/login", userDetails);
      return respnse.data as unknown as authApiReturnType;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      const { foundUser, encodedToken } = action.payload;
      state.username = foundUser.username;
      state.encodedToken = encodedToken;
      state.isAuthenticated = true;
    });
  },
});
export const authStateSelector=(state:RootState)=>state.auth;

export default authSlice.reducer;
