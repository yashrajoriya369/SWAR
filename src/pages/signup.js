import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate("/");
  };
  return (
    <div className="container">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <h2>Create Account</h2>
            <p>Join CLAMIS to start preparing for interviews</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <input
                type="text"
                id="signup-name"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <div className="password-toggle">
                <input
                  type={showPassword ? "text" : "password"}
                  id="signup-password"
                  className="form-control"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signup-confirm">Confirm Password</label>
              <div className="password-toggle">
                <input
                  type={showConfirm ? "text" : "password"}
                  id="signup-confirm"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`far ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <button
              type="submit"
              className="btn-login"
              disabled={!name || !email || !password || !confirmPassword}
            >
              Create Account
            </button>

            <div className="auth-footer">
              <p>
                By signing up, you agree to our{" "}
                <Link to="/terms-and-conditions">Terms of Service</Link> and{" "}
                <Link to="/privacy">Privacy Policy</Link>
              </p>
            </div>

            <div className="divider">
              <span>Or sign up with</span>
            </div>

            <div className="auth-footer">
              <Link to="/">Already have an account?</Link>
            </div>

            <div className="social-login">
              <button className="social-btn google">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="social-btn linkedin">
                <i className="fab fa-linkedin"></i> LinkedIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
