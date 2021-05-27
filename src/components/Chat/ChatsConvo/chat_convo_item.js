import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../Common/avatar";
import Spinner from "../../Common/Spinner/spinner";

const ChatConvoItemComponent = ({ isOwner, msg }) => {
  const selectedChat = useSelector((state) => state.chatsReducer.selectedChat);
  const user = useSelector((state) => state.usersReducer.user);
  const [loadingImg, setLoadingImg] = useState(true);

  const className = isOwner
    ? "message-container-right"
    : "message-container-left";

  return (
    <div
      className={`chat-convo-item d-flex flex-column align-items-${
        isOwner ? "end" : "start"
      }`}
    >
      <div className={`message-container ${className} text-start`}>
        {msg.type === 0 ? (
          msg.text
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={msg.text}
              alt={msg.text}
              width="100%"
              height={"100%"}
              className={loadingImg ? "d-none" : "d-block"}
              onLoad={() => setLoadingImg(false)}
            />
            <Spinner loading={loadingImg} color={isOwner ? null : "#fff"} />
          </div>
        )}
      </div>
      <div
        className={`user-details d-flex align-items-center mt-3 ${
          !isOwner ? "flex-row-reverse" : ""
        }  `}
      >
        <div className={`text-${isOwner ? "end" : "start"} mx-3`}>
          <p className="username">
            {isOwner ? "Me" : selectedChat.friend.name}
          </p>
          <p className="message-time">1m ago</p>
        </div>
        <Avatar
          imgUrl={isOwner ? user.photoUrl : selectedChat.friend.photoUrl}
          radius="50px"
          className="ml-3"
        />
      </div>
    </div>
  );
};

ChatConvoItemComponent.defaultProps = {
  isOwner: false,
  msg: {},
};

export default ChatConvoItemComponent;
