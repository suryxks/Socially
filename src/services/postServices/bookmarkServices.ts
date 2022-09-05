import axios from "axios";
export const getAllBookmarksService = async (token: string) => {
  return await axios.get(`/api/users/bookmark`, {
    headers: { authorization: token },
  });
};
export const addToBookmarkService = async ({token,postId,}: {token: string;postId: string;}) => {
    return await axios.post(`/api/users/bookmark/${postId}`, {}, {
        headers: { authorization: token }
    }
  );
};
export const removeFromBookmarksService = async ({ token, postId }: { token: string; postId: string }) => {
  return await axios.post(`/api/users/remove-bookmark/${postId}`,{},{
      headers: { authorization: token },
    }
  );
};
