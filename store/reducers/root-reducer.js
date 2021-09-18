import { combineReducers } from "redux";

import uiReducers from "./ui-reducer";

const rootReducer = combineReducers({
  uiReducers,
});

export default rootReducer;
