import ChatsConvoComponent from "../../components/Chat/ChatsConvo/chats_convo";
import ChatsListComponent from "../../components/Chat/ChatsList/chats_list";
import ChatsConvoDetailsComponent from "../../components/Chat/ChatsConvo/chat_convo_details";
import "./style.scss";

const Chat = () => {
  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="d-flex items-container">
          <div
            className="flex-item"
            style={{
              flexGrow: "1",
            }}
          >
            <ChatsListComponent />
          </div>
          <div
            className="flex-item"
            style={{
              flexGrow: "12",
            }}
          >
            <ChatsConvoComponent />
          </div>
          <div
            className="flex-item"
            style={{
              flexGrow: "3",
            }}
          >
            <ChatsConvoDetailsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
