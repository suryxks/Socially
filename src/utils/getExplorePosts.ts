import { follwingUserData, post , user } from "app/types";

export const getExplorePosts = (following: follwingUserData[], posts: post[], userData: user) => {
    const { username } = userData;
    const postsCopy = [...posts];
    const followingCopy = [...following];
    const explorePosts = postsCopy.reduce((accumulator: post[], currentPost: post) => {
        const ifUserFollowed = followingCopy.find(user => user.username === currentPost.username);
        const isCurrentUser = username === currentPost.username;
        // console.log(ifUserFollowed)
        if (!ifUserFollowed&&!isCurrentUser) {
            accumulator = [...accumulator, currentPost]
            return accumulator
        }
        return accumulator;
    }, [])
    return explorePosts;
}