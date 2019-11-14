import { combineReducers } from "redux";

import { episodes } from "./episodes/reducers";
import { characters } from "./characters/reducers";

export default combineReducers({
  episodes,
  characters
});