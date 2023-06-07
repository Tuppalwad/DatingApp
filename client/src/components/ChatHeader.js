const ChatHeader = ({ user }) => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={""} alt={""} />
        </div>
        <h3>{}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        ⇦
      </i>
    </div>
  );
};

export default ChatHeader;
