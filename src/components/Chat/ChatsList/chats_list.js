import Avatar from "../../Common/avatar";
import "../style.scss";
import ChatListItem from "./chats_list_item";
const ChatsListComponent = () => {
  return (
    <div className="chats-list-component text-start d-flex flex-column">
      <h4 className="mb-4">Peaman</h4>
      <div className="profile-details d-flex flex-column align-items-center justify-content-center">
        <Avatar
          imgUrl="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.864507418.1615680000"
          radius="90px"
        />
        <h5 className="mt-3 mb-0">Antonio Petez</h5>
        <p className="mb-0">Great person from heart</p>
      </div>

      <h5 className="mb-4 mt-5">Active Conversations</h5>

      <div className="chats-list">
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((_) => {
          return <ChatListItem />;
        })}
      </div>
    </div>
  );
};

export default ChatsListComponent;
