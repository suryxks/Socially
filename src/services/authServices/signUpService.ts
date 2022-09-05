import { authFormData } from "app/types";
import axios from "axios";
export const signupService = async (userDetails: authFormData) => {
    return await axios.post("/api/auth/signup", userDetails);
  };