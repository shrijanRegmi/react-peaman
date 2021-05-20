import { GET_CHATS, GET_MESSAGES } from "./constants";

const getChats = (uid) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/chats?uid=${uid}&limit=2`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_CHATS,
          payload: {
            chats: res,
          },
        });
      })
      .catch((e) => console.log("Error!!: Getting chats", e));
  };
};

const getMessages = (chat_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/chats/${chat_id}/messages?limit=10`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_MESSAGES,
          payload: {
            chat_id,
            messages: res,
          },
        });
      })
      .catch((e) => console.log("Error!!: Getting messages", e));
  };
};

export { getChats, getMessages };
