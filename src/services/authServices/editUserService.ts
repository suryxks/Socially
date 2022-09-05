import { editData } from "app/types";
import axios from "axios";

export const editUserService = async ({userDetails,token,}: {userDetails: editData;token: string;}) => {
    return await axios.post("/api/users/edit", userDetails, {headers: { authorization: token },});
  };
  