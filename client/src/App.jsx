import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sign from "./views/auth/Sign";
import axios from "axios";
import Home from "./views/home/Home";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${import.meta.env.VITE_SERVER_URL}`;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("/auth/verify");
        if (!res.data.ok) throw new Error(res.data.message);

        return;
      } catch (error) {
        navigate("/sign");
      }
    };

    verifyUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
