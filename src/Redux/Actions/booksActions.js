import booksApi from "../../Services/BookService";
import { ADD_BOOKS } from "../AllConstants";

const getBooksDataAndUpdate = async (dispatch) => {
  const books = await booksApi.getAllBookDetails();
  dispatch(ADD_BOOKS, [...books]);
};

const booksMethodMapper = {
  getBooksDataAndUpdate,
};

export default booksMethodMapper;
