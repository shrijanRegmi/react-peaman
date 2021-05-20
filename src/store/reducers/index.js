import { combineReducers } from "redux";
import chatsReducer from "./Chats/index";

const rootReducer = combineReducers({
  chatsReducer,
});

export default rootReducer;
