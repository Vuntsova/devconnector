import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li className="hide-sm">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hide-sm">
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">
              <i className="fas fa-user"></i>{' '}
              <span className="hide-sm">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <i className="fas fa-sign-out-alt"></i>{' '}
              <span className="hide-sm">Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
