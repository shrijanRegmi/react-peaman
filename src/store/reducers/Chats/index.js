import {
  GET_CHATS,
  GET_MESSAGES,
  GET_SELECTEDCHAT,
  UPDATE_CHAT_LOADER,
} from "../../actions/Chats/constants";

const initState = {
  chats: [],
  messages: {},
  selectedChat: {},
  isLoadingChats: false,
  isLoadingMessages: false,
};

const chatsReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case GET_CHATS:
      return {
        ...state,
        chats: payload.chats,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.chat_id]: payload.messages.reverse(),
        },
      };
    case GET_SELECTEDCHAT:
      return {
        ...state,
        selectedChat: payload.selectedChat,
      };
    case UPDATE_CHAT_LOADER:
      return {
        ...state,
        isLoadingChats:
          payload.isLoadingChats != undefined
            ? payload.isLoadingChats
            : state.isLoadingChats,
        isLoadingMessages:
          payload.isLoadingMessages != undefined
            ? payload.isLoadingMessages
            : state.isLoadingMessages,
      };
    default:
      return state;
  }
};

export default chatsReducer;
