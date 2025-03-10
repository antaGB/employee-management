import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5002";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username,
        password,
      });
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration failed!";
      console.error("Registration error:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
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
          Register
        </button>
      </form>
      <p class="register-link">
        Already have an account?
        <br />
        <Link to="/Login">Login Here!</Link>
      </p>
    </div>
  );
}

export default Register;
