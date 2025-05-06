import React from "react";
import { VisibleIcon, InvisibleIcon } from "../../outil/svg";
import { toast } from "sonner";
import axios from "axios";

function SignUp() {
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [seePassword, setSeePassword] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !lastname || !email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      const res = await axios.post("/auth/signup", {
        name,
        lastname,
        email,
        password,
      });

      console.log(res);
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h1 className="header">Sign Up</h1>

      <div className="field_container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder=" "
          maxLength={30}
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field_container">
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          placeholder=" "
          maxLength={30}
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div className="field_container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder=" "
          maxLength={50}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field_container">
        <label htmlFor="password">Password</label>
        <input
          type={seePassword ? "text" : "password"}
          placeholder=" "
          maxLength={15}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="see" onClick={() => setSeePassword(!seePassword)}>
          {seePassword ? <VisibleIcon /> : <InvisibleIcon />}
        </span>
      </div>

      <button className="submit" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
