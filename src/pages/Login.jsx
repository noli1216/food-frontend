import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from '../config/api';
import "./register.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("API URL:", import.meta.env.VITE_API_URL);

     const data = await response.json();
     console.log("LOGIN RESPONSE:", data);

     if (!response.ok || !data.token) {
       alert(data.message || "Login failed");
       return;
     }

     localStorage.setItem("token", data.token);
     localStorage.setItem("user", JSON.stringify(data.user));

     navigate("/home");
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form className="register-form" onSubmit={handleForm}>
        <input
          type="email"
          value={formData.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          value={formData.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
