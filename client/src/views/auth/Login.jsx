import React from "react";
import { VisibleIcon, InvisibleIcon } from "../../outil/svg";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [seePassword, setSeePassword] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }

    if (password.length < 6 || password.length > 15)
      return toast.error("Password must be between 6 and 15 characters");

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      if (!res.data.ok) throw new Error(res.data.message);

      navigate("/");
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1 className="header">Log In</h1>

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
        Log In
      </button>
    </form>
  );
}

export default Login;
