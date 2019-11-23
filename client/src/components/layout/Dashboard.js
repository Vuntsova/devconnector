import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome Emiliya Vuntsova
        </p>
        <div className="dash-buttons">
          <Link to="/create-profile" className="btn">
            <i className="fas fa-user-circle text-primary"></i> Edit Profile
          </Link>
          <Link to="/add-education" className="btn">
            <i className="fas fa-graduation-cap text-primary"></i> Add Education
          </Link>
          <Link to="/add-experience" className="btn">
            <i className="fab fa-black-tie text-primary"></i> Add Experience
          </Link>
        </div>
        <h2 className="my-2">Experiance Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
              <th className="hide-sm"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NASA</td>
              <td className="hide-sm">Software Developer</td>
              <td className="hide-sm">Oct 2015 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>NASA</td>
              <td className="hide-sm">Software Developer</td>
              <td className="hide-sm">Oct 2015 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="my-2">Education Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Years</th>
              <th className="hide-sm"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UCF</td>
              <td className="hide-sm">Software Developer</td>
              <td className="hide-sm">Oct 2015 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>UCF</td>
              <td className="hide-sm">Software Developer</td>
              <td className="hide-sm">Oct 2015 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-2">
          <button className="btn btn-danger">
            <i className="fas fa-user-minus"></i> Delete My Account
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
