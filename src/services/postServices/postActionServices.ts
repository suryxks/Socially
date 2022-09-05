import { postRequest ,commentRequest, deleteCommentRequest } from "app/types";
import axios from "axios";

export const likePostService = async ({ token, postId }: { token: string; postId: string }) => {
    return await axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization: token } })
}
export const dislikePostService = async ({ token, postId }: { token: string; postId: string }) => {
    return await axios.post(`/api/posts/dislike/${postId}`, {}, { headers: { authorization: token } })
}

export const deletePostService = async ({ token, postId }: { token: string; postId: string }) => {
    return await axios.delete(`/api/posts/${postId}`, { headers: { authorization: token } });
}

export const getPostsService = async () => await axios.get("/api/posts");

export const createPostService = async ({ token, postContent }: postRequest) => {
    return await axios.post(
        "/api/posts",
        { postData: postContent },
        { headers: { authorization: token } }
    );
}



export const addCommentService = async ({ commentData, token, postId }: commentRequest) => {
    return await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: token } }
    );
}
export const deleteCommentService=async ({ token, postId, commentId }: deleteCommentRequest) => {
  return await axios.delete(
            `/api/comments/delete/${postId}/${commentId}`,
            { headers: { authorization: token } }
        );
    }
      