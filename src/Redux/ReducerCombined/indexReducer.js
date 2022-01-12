import { combineReducers } from "redux";
import { booksReducer } from "./Reducers/BooksReducer";
import { marathonReducer } from "./Reducers/MarathonReducer";

const reducer = combineReducers({
  booksReducer: booksReducer,
  marathonReducer: marathonReducer,
});

export default reducer;
