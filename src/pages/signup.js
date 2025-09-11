import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <div className="auth-form">
            <div className="form-group">
              <label for="signup-name">Full Name</label>
              <input
                type="text"
                id="signup-name"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label for="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label for="signup-password">Password</label>
              <div className="password-toggle">
                <input
                  type="password"
                  id="signup-password"
                  className="form-control"
                  placeholder="Create a password"
                />
                <i className="far fa-eye" id="toggle-signup-password"></i>
              </div>
            </div>

            <div className="form-group">
              <label for="signup-confirm">Confirm Password</label>
              <div className="password-toggle">
                <input
                  type="password"
                  id="signup-confirm"
                  className="form-control"
                  placeholder="Confirm your password"
                />
                <i className="far fa-eye" id="toggle-signup-confirm"></i>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3 rounded w-100"
            >
              Create Account
            </button>

            <div className="auth-footer">
              <p>
                By signing up, you agree to our <Link to="#">Terms of Service</Link>{" "}
                and <Link to="">Privacy Policy</Link>
              </p>
            </div>

            <div className="divider">
              <span>Or sign up with</span>
            </div>

            <div className="auth-footer">
              <Link to="/login">Already have an account?</Link>
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
  );
};

export default SignUp;
