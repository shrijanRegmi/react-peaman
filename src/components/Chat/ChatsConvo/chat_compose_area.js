const ChatComposeComponent = () => {
  return (
    <div className="chat-compose-area">
      <div className="chat-input d-flex align-items-center">
        <input
          type="text"
          placeholder="Type something awesome..."
        />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
};

export default ChatComposeComponent;
