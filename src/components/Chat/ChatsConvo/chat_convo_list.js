import ChatConvoItemComponent from "./chat_convo_item";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../../../store/actions/Chats";
import Scrollbars from "react-custom-scrollbars";
import Spinner from "../../Common/Spinner/spinner";

const ChatConvoListComponent = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const messagesFromStore = useSelector((state) => state.chatsReducer.messages);
  const selectedChat = useSelector((state) => state.chatsReducer.selectedChat);
  const messages = messagesFromStore[selectedChat.id]
    ? messagesFromStore[selectedChat.id]
    : [];
  const isLoading = useSelector(
    (state) => state.chatsReducer.isLoadingMessages
  );
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    dispatch(getMessagesAction(selectedChat.id));
  }, [selectedChat]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToBottom();
    }
  }, [messages]);

  return (
    <div className="chat-convo-list">
      <Scrollbars autoHide className="scrollbar" ref={ref}>
        <div
          style={{
            margin: "20px",
          }}
        >
          {!isLoading &&
            messages.map((msg, i) => {
              return (
                <ChatConvoItemComponent
                  key={msg.milliseconds}
                  msg={msg}
                  isOwner={msg.senderId === user.uid}
                />
              );
            })}
        </div>
        <Spinner loading={isLoading} />
      </Scrollbars>
    </div>
  );
};

export default ChatConvoListComponent;
