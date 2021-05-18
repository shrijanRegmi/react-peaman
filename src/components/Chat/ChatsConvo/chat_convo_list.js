import ChatConvoItemComponent from "./chat_convo_item";
import { useEffect, useRef } from "react";

const ChatConvoListComponent = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat-convo-list">
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((e, i) => {
        return <ChatConvoItemComponent isOwner={i % 2 == 0} />;
      })}
      <div ref={ref}></div>
    </div>
  );
};

export default ChatConvoListComponent;
