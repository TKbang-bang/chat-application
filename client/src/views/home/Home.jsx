import React from "react";
import Sidebar from "./components/Sidebar";
import NoChats from "./components/NoChats";
import { Route, Routes } from "react-router-dom";
import "../../styles/home.css";
import Chat from "./components/Chat";
// import io from "socket.io-client";

function Home() {
  return (
    <section className="home">
      <Sidebar />

      <Routes>
        <Route path="/" element={<NoChats />} />
        <Route path={"/chat/:id"} element={<Chat />} />
      </Routes>
    </section>
  );
}

export default Home;
