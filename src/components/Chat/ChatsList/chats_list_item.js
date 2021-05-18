import Avatar from "../../Common/avatar";

const ChatListItem = () => {
  return (
    <div className="chats-list-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Avatar
          imgUrl="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"
          radius="55px"
        />

        <div className="mx-3">
          <h6 className="mb-0">Harold Howard</h6>
          <p className="mb-0">
            Hello tomorrow at 5 o'clock <span>. 5m</span>
          </p>
          <hr />
        </div>
      </div>
      <div className="message-count"><p>14</p></div>
    </div>
  );
};

export default ChatListItem;
