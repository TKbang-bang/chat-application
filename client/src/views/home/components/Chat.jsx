import React from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import UserInfo from "./UserInfo";
import "../../../styles/chat.css";
import io from "socket.io-client";

const socket = io(`${import.meta.env.VITE_SERVER_URL}`);

function Chat() {
  const { id } = useParams();

  return (
    <section className="chat">
      <Messages id={id} socket={socket} />
      <UserInfo id={id} />
    </section>
  );
}

export default Chat;
