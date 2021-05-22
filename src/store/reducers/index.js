import { combineReducers } from "redux";
import chatsReducer from "./Chats/index";
import usersReducer from "./Users/index";

const rootReducer = combineReducers({
  chatsReducer,
  usersReducer,
});

export default rootReducer;
