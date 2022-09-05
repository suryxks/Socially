import axios from "axios";

export const getUsersService = async () => await axios.get("/api/users");

export const followUserService=async ({ userId, token }: { userId: string|undefined; token: string }) => {
   return await axios.post(
            `/api/users/follow/${userId}`,
            {},
            { headers: { authorization: token } }
        );
}
    
export const unfollowUserService = async ({ userId, token }: { userId: string | undefined; token: string }) => {
    return await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        { headers: { authorization: token } }
    );
}