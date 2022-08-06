import { follwingUserData, post } from "app/types";

export   const getExplorePosts = (following: follwingUserData[], posts: post[]) => {
    const postsCopy = [...posts];
    const followingCopy = [...following];
    const explorePosts = postsCopy.reduce((accumulator: post[], currentPost: post) => {
        const ifUserFollowed = followingCopy.find(user => user.username !== currentPost.username);
        // console.log(ifUserFollowed)
        if (ifUserFollowed) {
            accumulator = [...accumulator, currentPost]
            return accumulator
        }
        return accumulator;
    }, [])
    return explorePosts;
}