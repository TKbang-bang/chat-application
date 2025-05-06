import React from "react";
import { Routes, Route } from "react-router-dom";
import Sign from "./views/auth/Sign";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${import.meta.env.VITE_SERVER_URL}`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/sign" element={<Sign />} />
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
