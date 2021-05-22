import Avatar from "../../Common/avatar";
import TimeAgo from "timeago-react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedChatAction } from "../../../store/actions/Chats";

const ChatListItem = ({ chat }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.user);

  const handleChatSelection = () => {
    dispatch(getSelectedChatAction(chat.id));
  };

  console.log(chat);

  const unreadCount = chat.first_user_ref._path.segments.includes(user.uid)
    ? chat.first_user_unread_messages_count
    : chat.second_user_unread_messages_count;

  return (
    <div
      className="chats-list-item d-flex align-items-center justify-content-between"
      onClick={handleChatSelection}
    >
      <div className="d-flex align-items-center w-100">
        <Avatar imgUrl={chat.friend.photoUrl} radius="55px" />

        <div className="mx-3">
          <h6 className="mb-0">{chat.friend.name}</h6>
          <p className="mb-0">
            {chat.last_message.text.length >= 15
              ? `${chat.last_message.text.substring(0, 15)}...`
              : chat.last_message.text}
            <span>
              . <TimeAgo datetime={"Fri Jan 11 2021 14:52:11 GMT+0545"} />
            </span>
          </p>
          <hr />
        </div>
      </div>
      {unreadCount > 0 && (
        <div className="message-count">
          <p>{unreadCount}</p>
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
