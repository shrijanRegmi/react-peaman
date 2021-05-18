import "../style.scss";
import ChatComposeComponent from "./chat_compose_area";
import ChatConvoListComponent from "./chat_convo_list";

const ChatsConvoComponent = () => {
  return (
    <div className="chats-convo-component d-flex flex-column">
      <ChatConvoListComponent />
      <ChatComposeComponent />
    </div>
  );
};

export default ChatsConvoComponent;
