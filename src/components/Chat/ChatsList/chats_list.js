import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import Avatar from "../../Common/avatar";
import "../style.scss";
import ChatListItem from "./chats_list_item";
import { useSelector, useDispatch } from "react-redux";
import { getChats } from "../../../store/actions/Chats";

const ChatsListComponent = () => {
  const chats = useSelector((state) => state.chatsReducer.chats);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getChats("178eAz5WbdWRdDU2qeN0MNJz0dD2"));
  }, []);

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

      <div className="chats-list">
        {chats.map((chat) => {
          return <ChatListItem key={chat.id} />;
        })}
      </div>
    </div>
  );
};

export default ChatsListComponent;
