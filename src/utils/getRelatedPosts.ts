import { follwingUserData, post } from "app/types";

export   const getRelatedPosts = (following: follwingUserData[], posts: post[]) => {
    const postsCopy = [...posts];
    const followingCopy = [...following];
    const relatedPosts = postsCopy.reduce((accumulator: post[], currentPost: post) => {
        const ifUserFollowed = followingCopy.find(user => user.username === currentPost.username)
        if (ifUserFollowed) {
            accumulator = [...accumulator, currentPost]
            return accumulator
        }
        return accumulator;
    }, [])
    return relatedPosts;
}