import { GET_CHATS, GET_MESSAGES } from "../../actions/Chats/constants";

const initState = { chats: [], messages: {} };

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
          [payload.chat_id]: payload.messages,
        },
      };
  }

  return state;
};

export default chatsReducer;
