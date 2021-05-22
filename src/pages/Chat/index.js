import ChatsConvoComponent from "../../components/Chat/ChatsConvo/chats_convo";
import ChatsListComponent from "../../components/Chat/ChatsList/chats_list";
import ChatsConvoDetailsComponent from "../../components/Chat/ChatsConvo/chat_convo_details";
import "./style.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/actions/Users";
import { getSelectedChatAction } from "../../store/actions/Chats";
import Spinner from "../../components/Common/Spinner/spinner";

const Chat = () => {
  const dispatch = useDispatch();
  const uid = "178eAz5WbdWRdDU2qeN0MNJz0dD2";
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    dispatch(getUserAction(uid));
  }, [uid]);

  return (
    <div className="chat-page">
      <div className="chat-container">
        {user.uid && (
          <div className="row items-container">
            <div className="flex-item col-3">
              <ChatsListComponent />
            </div>
            <div className="flex-item col-6">
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
