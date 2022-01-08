import { ADD_BOOKS } from "../../AllConstants";
import { booksInit } from "../Store/BooksStore";

export const booksReducer = (state = { ...booksInit }, action) => {
  switch (action.type) {
    case ADD_BOOKS: {
      return Object.assign({}, state, { books: [...action.value] });
    }
    default:
      return state;
  }
};
