import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Developers extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="large text-primary">Developers</div>
        <p className="lead">
          <i className="fab fa-connectdevelop"></i> Browse in Connect with
          Developers
        </p>
        <div className="profiles">
          <div className="profile bg-light">
            <img
              src="https://www.gravatar.com/avatar/25e460b479e2e5b48aec07710c08d50?s=200"
              className="round-img"
              alt=""
            />
            <div className="name">
              <h2>Emiliya Vuntsova</h2>
              <p>Developer</p>
              <p>Chicago, IL</p>
              <Link to="/profile" className="btn btn-primary">
                View Profile
              </Link>
            </div>
            <ul className="hide-sm">
              <li className="text-primary">
                <i className="fas fa-check"></i> HTML
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> CSS
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> JavaScript
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> Express
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> React js
              </li>
            </ul>
          </div>
          <div className="profile bg-light">
            <img
              src="https://www.gravatar.com/avatar/25e460b479e2e5b48aec07710c08d50?s=200"
              className="round-img"
              alt=""
            />
            <div className="name">
              <h2>Vanesa May</h2>
              <p>Developer</p>
              <p>Washington, D.C.</p>
              <Link to="/profile" className="btn btn-primary">
                View Profile
              </Link>
            </div>
            <ul className="hide-sm">
              <li className="text-primary">
                <i className="fas fa-check"></i> HTML
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> CSS
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> JavaScript
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> Express
              </li>
              <li className="text-primary">
                <i className="fas fa-check"></i> React js
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Developers;
