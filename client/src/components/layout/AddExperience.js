import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddExperience extends Component {
  render() {
    return (
      <section className="container">
        <h1 className="large text-primary">Experience</h1>
        <p className="lead">
          <i className="fab fa-black-tie"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required</small>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="* Title" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="* Company" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Location" />
          </div>

          <div className="form-group time-period">
            <label>* From</label>
            <input type="date" required />
          </div>
          <div className="form-group time-period">
            <label>To</label>
            <input type="date" />
          </div>
          <div className="form-group time-period">
            <input type="radio" name="current" /> Current Job
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              cols="50"
              type="text"
              name="description"
              placeholder="Job Description"
            />
          </div>
          <div className="my-1">
            <input type="submit" className="btn btn-primary" />
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default AddExperience;
