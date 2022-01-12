import axios from "axios";
import { DB_URL } from "../Redux/AllConstants";

const getCurrentUserDetails = async (userId, password) => {
  const userResponse = await axios.get(`${DB_URL}/users?userid=${userId}`);
  return userResponse.data;
};

const userApi = {
  getCurrentUserDetails,
};

export default userApi;
