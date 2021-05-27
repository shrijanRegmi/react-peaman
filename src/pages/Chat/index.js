import ChatsConvoComponent from "../../components/Chat/ChatsConvo/chats_convo";
import ChatsListComponent from "../../components/Chat/ChatsList/chats_list";
import ChatsConvoDetailsComponent from "../../components/Chat/ChatsConvo/chat_convo_details";
import "./style.scss";
import { useSelector } from "react-redux";
import Spinner from "../../components/Common/Spinner/spinner";
import SearchComponent from "../../components/Common/Search";

const Chat = () => {
  const user = useSelector((state) => state.usersReducer.user);

  return (
    <div className="chat-page">
      <div className="chat-container">
        {user.uid && (
          <div className="row items-container">
            <div className="flex-item col-3">
              <ChatsListComponent />
            </div>
            <div className="flex-item col-6 d-flex flex-column">
              <SearchComponent />
              <ChatsConvoComponent />
            </div>
            <div className="flex-item col-3">
              <ChatsConvoDetailsComponent />
            </div>
          </div>
        )}
        <Spinner loading={!user.uid} />
      </div>
    </div>
  );
};

export default Chat;
