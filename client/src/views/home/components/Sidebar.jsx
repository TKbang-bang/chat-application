import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AllUsers from "./AllUsers";
import "../../../styles/sidebar.css";

function Sidebar() {
  const [me, setMe] = React.useState({});
  const [toUrl, setToUrl] = React.useState("all");

  useEffect(() => {
    const gettingUser = async () => {
      try {
        const res = await axios.get("user/me");

        setMe(res.data.user);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    gettingUser();
  }, []);

  return (
    <article className="sidebar">
      <div className="sidebar_header">
        <h1>Chat.me</h1>

        <Link to={"/profile"}>
          <img
            src={
              me.profile_image
                ? import.meta.env.VITE_SERVER_URL
                : "/no_user.png"
            }
            alt=""
          />
        </Link>
      </div>

      <div className="users_container">
        <div className="btns">
          <button onClick={() => setToUrl("chats")}>My chats</button>
          <button onClick={() => setToUrl("all")}>All users</button>
        </div>

        <AllUsers url={`/users/${toUrl}`} />
      </div>
    </article>
  );
}

export default Sidebar;
