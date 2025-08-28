import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" action="#" method="post">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="password-input"
          />
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Login</button>


        {/* REGISTER LINK BELOW */}
        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default PasswordToggle;






