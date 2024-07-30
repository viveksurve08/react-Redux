import { combineReducers } from "redux";
import changeTheNumber from "./upDown";
import changeTheHistory from "./history";

const rootReducer = combineReducers({
  changeTheNumber,
  changeTheHistory,
});

export default rootReducer;
