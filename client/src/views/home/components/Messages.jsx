import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function Messages({ id, socket }) {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const gettingUser = async () => {
      try {
        const res = await axios.get(`user/${id}`);

        setUser(res.data.user);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    const gettingMessages = async () => {
      try {
        const res = await axios.get(`/messages/${id}`);

        setMessages(res.data.messages);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    gettingMessages();
    gettingUser();
  }, [id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    socket.emit("message", { id, message });
    setMessage("");
  };

  return (
    <section className="messages">
      <div className="messages_header">
        <div className="user_info_container">
          <img
            src={
              user.profile_image
                ? `${import.meta.env.VITE_SERVER_URL + user.profile_image}`
                : "/no_user.png"
            }
            alt={user.name}
          />

          <h3>
            {user.name} {user.lastname}
          </h3>
        </div>

        <Link to={"/"}>Close</Link>
      </div>

      <div className="messages_container">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Messages;
