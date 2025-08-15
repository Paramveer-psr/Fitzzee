import React, { useState } from "react";
import "../login-signup/Auth.css";
import axios from "axios";
import { loginRoute, registerRoute } from "../../utils/ApiRoutes";

function Auth({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   console.log(registerRoute);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      const { data } = await axios.post(registerRoute, formData, {
        withCredentials: true,
      });
      if (data.success === true) {
        setIsLogin(true);
      }
    } else {
      const { data } = await axios.post(loginRoute, formData, {
        withCredentials: true,
      });
      localStorage.setItem("token", JSON.stringify(data.data.accessToken));
      localStorage.setItem("user", JSON.stringify(data.data.user));
    }
    // localStorage.setItem(data.data);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-content">
        <button className="auth-close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="auth-heading">{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="auth-toggle-link" onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
