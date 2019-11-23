import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Alert */}
        <div className="alert alert-danger">Invalid Credentials</div>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign Into your account
        </p>
        <form className="form">
          <div className="form-group">
            <input type="email" placeholder="E-mail Address" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              minlength="6"
              required
            />
          </div>
          <input type="submit" value="Log In" className="btn btn-primary" />
        </form>
        <p className="my-1">
          Don't have an Account <Link to="/register">Sign Up</Link>
        </p>
      </React.Fragment>
    );
  }
}

export default Login;
