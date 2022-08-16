import { follwingUserData, post, user } from "app/types";

export const getRelatedPosts = (
  following: follwingUserData[],
  posts: post[],
  userData: user
) => {
  const postsCopy = [...posts];
  const followingCopy = [...following];
  const relatedPosts = postsCopy.reduce(
    (accumulator: post[], currentPost: post) => {
      const ifUserFollowed = followingCopy.find(
        (user) => user.username === currentPost.username
      );
      if (ifUserFollowed || currentPost.username === userData.username) {
        accumulator = [...accumulator, currentPost];
        return accumulator;
      }
      return accumulator;
    },
    []
  );
  return relatedPosts;
};
