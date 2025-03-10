import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./User.css";

// Update to new domain
const API_URL = "https://employee-management-ws.vercel.app";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("Login successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Login failed!";
      setError(errorMessage);
      console.error("Login error:", errorMessage);
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
