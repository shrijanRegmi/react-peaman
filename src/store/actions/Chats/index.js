import {
  GET_CHATS,
  GET_MESSAGES,
  GET_SELECTEDCHAT,
  UPDATE_CHAT_LOADER,
} from "./constants";

const getChatsAction = (uid) => {
  return (dispatch) => {
    dispatch(updateChatLoaderAction({ isLoadingChats: true }));
    fetch(`http://localhost:3001/chats?uid=${uid}&limit=5`)
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0)
          dispatch({
            type: GET_SELECTEDCHAT,
            payload: {
              selectedChat: res[0],
            },
          });
        dispatch({
          type: GET_CHATS,
          payload: {
            chats: res,
          },
        });
      })
      .catch((e) => console.log("Error!!: Getting chats", e))
      .finally(() => {
        dispatch(updateChatLoaderAction({ isLoadingChats: false }));
      });
  };
};

const getMessagesAction = (chat_id) => {
  return (dispatch) => {
    dispatch(updateChatLoaderAction({ isLoadingMessages: true }));
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
      .catch((e) => console.log("Error!!: Getting messages", e))
      .finally(() => {
        dispatch(updateChatLoaderAction({ isLoadingMessages: false }));
      });
  };
};

const getSelectedChatAction = (chat_id) => {
  return (dispatch, getState) => {
    const {
      chatsReducer: { chats },
    } = getState();

    const selectedChat = chats.find((itm) => itm.id === chat_id);

    dispatch({
      type: GET_SELECTEDCHAT,
      payload: {
        selectedChat: selectedChat,
      },
    });
  };
};

const updateChatLoaderAction = ({ isLoadingChats, isLoadingMessages }) => {
  return {
    type: UPDATE_CHAT_LOADER,
    payload: {
      isLoadingChats,
      isLoadingMessages,
    },
  };
};

export {
  getChatsAction,
  getMessagesAction,
  getSelectedChatAction,
  updateChatLoaderAction,
};
