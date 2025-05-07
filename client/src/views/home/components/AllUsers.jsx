import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { NavLink } from "react-router-dom";

function AllUsers({ url }) {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    const gettingUsers = async () => {
      try {
        const res = await axios.get(url);

        setUsers(res.data.users);
        // console.log(res.data.users);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    gettingUsers();
  }, [url]);

  return (
    <div className="all_users">
      {users.map((user) => (
        <NavLink to={`/chat/${user.id}`} key={user.id}>
          <img
            src={
              user.profile_image
                ? `${import.meta.env.VITE_SERVER_URL + user.profile_image}`
                : "/no_user.png"
            }
            alt={user.name}
          />

          <div className="info">
            <p className="name">
              {user.name} {user.lastname}
            </p>
            {/* <p>{user.email}</p> */}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllUsers;
