import axios from "axios";
import { DB_URL } from "../Redux/AllConstants";

const getAllBookDetails = async (props) => {
  const booksResponse = await axios.get(`${DB_URL}/books`);
  return booksResponse.data;
};

const booksApi = {
  getAllBookDetails: getAllBookDetails,
};

export default booksApi;
