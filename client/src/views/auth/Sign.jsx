import React from "react";
import "../../styles/auth.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

function Sign() {
  return (
    <section className="auth">
      <div className="all_auth_container">
        <div className="sign_container">
          <SignUp />
          <Login />
        </div>

        <div className="switch login_switch">
          <h1 className="logo">Chat.me</h1>

          <h1>Welcome back</h1>
          <p>Please enter your details to start texting with your friends</p>

          <p className="other">You don't have an account?</p>
          <button
            onClick={() =>
              document
                .querySelector(".all_auth_container")
                .classList.add("active")
            }
          >
            Sign Up
          </button>
        </div>

        <div className="switch reg_switch">
          <h1 className="logo">Chat.me</h1>

          <h1>Create an account</h1>
          <p>Please enter your details to start texting with your friends</p>

          <p className="other">Already have an account?</p>
          <button
            onClick={() =>
              document
                .querySelector(".all_auth_container")
                .classList.remove("active")
            }
          >
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sign;
