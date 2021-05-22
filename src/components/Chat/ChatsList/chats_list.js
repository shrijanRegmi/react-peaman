import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import Avatar from "../../Common/avatar";
import "../style.scss";
import ChatListItem from "./chats_list_item";
import { useSelector, useDispatch } from "react-redux";
import { getChatsAction } from "../../../store/actions/Chats";
import Spinner from "../../Common/Spinner/spinner";
import Scrollbars from "react-custom-scrollbars";

const ChatsListComponent = () => {
  const chats = useSelector((state) => state.chatsReducer.chats);
  const user = useSelector((state) => state.usersReducer.user);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.chatsReducer.isLoadingChats);

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getChatsAction(user.uid));
  }, []);

  return (
    <div className="chats-list-component text-start d-flex flex-column">
      <h4 className="mb-4">Peaman</h4>
      <div className="profile-details d-flex flex-column align-items-center justify-content-center">
        <Avatar imgUrl={user.photoUrl} radius="90px" />
        <h5 className="mt-3 mb-0">{user.name}</h5>
        <p className="mb-0">Great person from heart</p>
        <p className="mt-2 mb-0 d-flex">
          <ReactSwitch
            onChange={setIsActive}
            checked={isActive}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#2663ff"
          />
          <span
            style={{
              marginLeft: "10px",
            }}
          >
            Active
          </span>
        </p>
      </div>

      <h5 className="mb-4 mt-5">Active Conversations</h5>

      <Spinner loading={isLoading} />

      {!isLoading && (
        <Scrollbars autoHide>
          {chats.map((chat) => {
            return <ChatListItem key={chat.id} chat={chat} />;
          })}
        </Scrollbars>
      )}
    </div>
  );
};

export default ChatsListComponent;
