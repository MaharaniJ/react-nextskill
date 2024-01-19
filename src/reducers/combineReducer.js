import { getCardReducer } from "./cardReducer";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
  getCardData: getCardReducer,
});

export default rootreducers;
