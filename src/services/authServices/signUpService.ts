import { signUpdata} from "app/types";
import axios from "axios";
export const signupService = async (userDetails: signUpdata) => {
    return await axios.post("/api/auth/signup", userDetails);
  };