import Avatar from "../../Common/avatar";

const ChatConvoItemComponent = ({ isOwner }) => {
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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et
      </div>
      <div
        className={`user-details d-flex align-items-center mt-3 ${
          !isOwner ? "flex-row-reverse" : ""
        }  `}
      >
        <div className={`text-${isOwner ? "end" : "start"} mx-3`}>
          <p className="username">Me</p>
          <p className="message-time">1m ago</p>
        </div>
        <Avatar
          imgUrl="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"
          radius="50px"
          className="ml-3"
        />
      </div>
    </div>
  );
};

export default ChatConvoItemComponent;
