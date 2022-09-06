import { authFormData } from "app/types";
import axios from "axios";

export const loginService = async (userDetails: authFormData) => {
  return await axios.post("/api/auth/login", userDetails);
};



