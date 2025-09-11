import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="auth-container" style={{width: "35%"}}>
          <div className="auth-box">
            <div className="auth-header">
              <div className="auth-icon">
                <i className="fas fa-user"></i>
              </div>
              <h2>Welcome Back</h2>
              <p>Sign in to continue your interview preparation</p>
            </div>
            <div className="auth-form">
              <div className="form-group">
                <label for="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label for="login-password">Password</label>
                <div className="password-toggle">
                  <input
                    type="password"
                    id="login-password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <i className="far fa-eye"></i>
                </div>
              </div>

              <Link to="/admin"
                type="submit"
                className="btn btn-primary w-100 mt-3 rounded"
              >
                Login
              </Link>

              <div className="auth-footer">
                <Link to="">Forgot your password?</Link>
              </div>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="auth-footer">
                <Link to="/create-account">Already have an account?</Link>
              </div>

              <div className="social-login">
                <button className="social-btn google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="social-btn linkedin">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
