import { combineReducers } from "redux";
import chatsReducer from "./Chats/index";
import usersReducer from "./Users/index";
import errorReducer from "./Error/index";

const rootReducer = combineReducers({
  chatsReducer,
  usersReducer,
  errorReducer,
});

export default rootReducer;
