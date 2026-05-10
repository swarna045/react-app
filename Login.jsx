import React, { useState } from "react";
import "../styles/login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    localStorage.setItem("loginData", JSON.stringify(formData));

    alert("Login Successful");

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">

      {/* LEFT PANEL */}
      <div className="left-panel">

        {/* Floating Circles */}
        <span
          className="floating-circle"
          style={{
            width: "120px",
            height: "120px",
            top: "40%",
            left: "10%",
          }}
        ></span>

        <span
          className="floating-circle"
          style={{
            width: "80px",
            height: "80px",
            top: "18%",
            right: "18%",
          }}
        ></span>

        {/* LOGO */}
        <div className="logo-box">

  <img
    src="https://admin.annapurnavivahavedika.com/logo.png"
    alt="Annapurna Vivahavedika Logo"
    className="logo-image"
  />

</div>

        <p className="portal-text">
          Admin Dashboard - Staff & Franchise Management Portal
        </p>

        {/* FEATURES */}

        <div className="feature-card">
          <div className="feature-icon">👥</div>

          <div>
            <h3>Staff Management</h3>
            <p>Manage team members and permissions</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏢</div>

          <div>
            <h3>Franchise Control</h3>
            <p>Monitor branch performance and operations</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💖</div>

          <div>
            <h3>Customer Insights</h3>
            <p>Track and manage customer relationships</p>
          </div>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">

        <form className="login-box" onSubmit={handleSubmit}>

          <h2>Admin Sign In</h2>

          <p className="sub-text">
            Access the management dashboard
          </p>

          {/* EMAIL */}
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>

          </div>

          {/* BUTTON */}
          <button type="submit">
            Sign In to Dashboard
          </button>

          {/* SECURITY BOX */}
          <div className="secure-box">
            This is a secure admin portal. All activities are logged and monitored.
          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;