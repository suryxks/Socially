import { signup } from 'features/authentication/authSlice';
export interface authState {
  userData: user | null;
  username: string;
  isAuthenticated: boolean;
  error: string;
  encodedToken: string;
}
export interface user {
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
export interface authApiReturnValue {
  foundUser: user;
  encodedToken: string;
}
export interface signupApiRetunValue{
    createdUser:user;
    encodedToken:string;
}
export type authFormData = {
  username: string;
  password: string;
};
export interface comment {
  text: string;
  username: string;
  votes: { upvotedBy: Array<user>; downvotedBy: Array<user> };
  _id: string;
}
export interface post {
 
  comments: Array<comment>;
  content: string;
  createdAt: string;
  id: string;
  likes: { likeCount: number; likedBy: Array<user>; dislikedBy: Array<user> };
  updatedAt: string;
  username: string;
  _id: string;
}
export interface signUpdata extends authFormData {
    firstname: string,
    lastname: string,
}