import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./User.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/login", {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      if (true) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <div class="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <p class="register-link">
        Don't have an account yet?
        <br />
        <Link to="/Register">Register Here!</Link>
      </p>
    </div>
  );
}

export default Login;
