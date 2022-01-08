import { combineReducers } from "redux";
import { booksReducer } from "./Reducers/BooksReducer";
import { usersReducer } from "./Reducers/UsersReducer";

const reducer = combineReducers({
  booksReducer: booksReducer,
  usersReducer: usersReducer,
});

export default reducer;
