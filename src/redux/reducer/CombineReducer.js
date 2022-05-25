import { combineReducers } from "redux";
import countReducer from "./counter-reducer";
import userReducer from "./form-reducer";


const rootReducer = combineReducers({
  countReducer :countReducer,
  userReducer:userReducer
})

export default rootReducer;