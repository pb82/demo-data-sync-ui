import { DATA_SOURCES_FETCH_SUCCESS } from "./types";

export const dataSourcesFetch = () => {
    return dispatch => {
        dispatch({
            type: DATA_SOURCES_FETCH_SUCCESS,
            payload: [{"type": "memory", "name": "best"}]
        });
    }
};
