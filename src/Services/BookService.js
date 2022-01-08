import axios from "axios";

const getAllBookDetails = async () => {
  const booksResponse = await axios.get("http://localhost:3001/books");
  return booksResponse.data;
};

const booksApi = {
  getAllBookDetails: getAllBookDetails,
};

export default booksApi;
