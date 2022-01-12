import { ADD_MARATHON_DATA } from "../../AllConstants";
import { marathonInit } from "../Store/MarathonStore";

export const marathonReducer = (state = { ...marathonInit }, action) => {
  switch (action.type) {
    case ADD_MARATHON_DATA: {
      return Object.assign({}, state, {
        marathon: [...state.marathon, action.value],
      });
    }
    default:
      return state;
  }
};
