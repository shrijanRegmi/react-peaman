import ChatConvoItemComponent from "./chat_convo_item";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../../store/actions/Chats";

const ChatConvoListComponent = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const messagesFromStore = useSelector((state) => state.chatsReducer.messages);
  const messages = messagesFromStore[
    "2iBUqWOTHbf4z6qNkvZcVvJZV703_178eAz5WbdWRdDU2qeN0MNJz0dD2"
  ]
    ? messagesFromStore[
        "2iBUqWOTHbf4z6qNkvZcVvJZV703_178eAz5WbdWRdDU2qeN0MNJz0dD2"
      ]
    : [];

  console.log(messages);

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    dispatch(
      getMessages("2iBUqWOTHbf4z6qNkvZcVvJZV703_178eAz5WbdWRdDU2qeN0MNJz0dD2")
    );
  }, []);

  return (
    <div className="chat-convo-list">
      {messages.map((msg, i) => {
        return (
          <ChatConvoItemComponent
            key={msg.milliseconds}
            msg={msg}
            isOwner={i % 2 == 0}
          />
        );
      })}
      <div ref={ref}></div>
    </div>
  );
};

export default ChatConvoListComponent;
