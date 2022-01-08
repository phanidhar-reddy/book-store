import { usersInit } from "../Store/UserStore";

export const usersReducer = (state = { ...usersInit }, action) => {
  switch (action.type) {
    case "ADD_USERS": {
      return Object.assign({}, state, { users: [...action.value] });
    }
    default:
      return state;
  }
};
