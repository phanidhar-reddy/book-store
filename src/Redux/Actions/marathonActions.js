import { ADD_MARATHON_DATA } from "../AllConstants";


const addMarathonData = (dispatch,marathon) =>{
    dispatch({ type: ADD_MARATHON_DATA, value: { ...marathon } });
}


const marathonService = {
    addMarathonData
}

export const marathonService;