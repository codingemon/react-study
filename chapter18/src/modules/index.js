import { combinReducers } from "redux";
import counter from "./counter";

const rootReducer = combinReducers({
  counter,
});

export default rootReducer;
