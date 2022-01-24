import { ADD_MARATHON_DATA } from "../AllConstants";

const addMarathonData = (marathon) => (dispatch) => {
  dispatch({ type: ADD_MARATHON_DATA, value: { ...marathon } });
};

const marathonService = {
  addMarathonData,
};

export default marathonService;
