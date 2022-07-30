export interface authState {
  userData: user | null;
  username: string;
  isAuthenticated: boolean;
  error: string;
  encodedToken: string;
}
export interface user {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  avatarURL: string;
  followers: [];
  following: [];
  bookmarks: [];
  bio: string;
  website: string;
  id: string;
}
export interface authApiReturnValue {
  foundUser: user;
  encodedToken: string;
}
export interface signupApiRetunValue {
  createdUser: user;
  encodedToken: string;
}
export type authFormData = {
  username: string;
  password: string;
};
export interface comment {
  _id:string,
  firstName:string,
  lastName: string,
  username: string,
  avatarURL:string,
  text:string,
  createdAt: string;
  votes: { upvotedBy: []; downvotedBy: [] };
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
  firstname: string;
  lastname: string;
}
