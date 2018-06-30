import { combineReducers } from "redux";
import DataSourceReducer from "./DataSourceReducer";

export default combineReducers({
    dataSources: DataSourceReducer
});
