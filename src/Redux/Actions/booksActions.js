import booksApi from "../../Services/BookService";
import { ADD_BOOKS } from "../AllConstants";

const getBooksDataAndUpdate = async (dispatch) => {
  const books = await booksApi.getAllBookDetails();
  dispatch({ type: ADD_BOOKS, value: [...books] });
};

const booksMethodMapper = {
  getBooksDataAndUpdate,
};

export default booksMethodMapper;
