import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateProfile extends Component {
  render() {
    return (
      <section className="container">
        <h1 className="large text-primary">Create Profile</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Lets get some information to make your
          profile stand out
        </p>
        <small>* = required fields</small>
        <form className="form">
          <div className="form-group">
            <select required>
              <option value="volvo">* Select Professional Status</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <small>Give us an idea of where are you at in your career</small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company" />
            <small>Coud be your company or one you work for</small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Website" />
            <small>Coud be your own or a company website</small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Location" />
            <small>City & State suggested (Chicago, IL)</small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Skills" required />
            <small>
              Please use comma separated values (eg. HTML, CSS, JavaScript)
            </small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Github username" />
            <small>
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              cols="50"
              placeholder="A short bio of yourself"
              name="bio"
            ></textarea>
            <small>Tell us about yourself</small>
          </div>
          <div className="my-2">
            <button className="btn">Add Social Network Links</button>
            <small>Optional</small>
          </div>
          <div className="form-group social-input">
            <label>
              <i className="fab fa-twitter"></i>
            </label>
            <input type="text" placeholder="Twitter URL" />
          </div>
          <div className="form-group social-input">
            <label>
              <i className="fab fa-facebook"></i>
            </label>
            <input type="text" placeholder="Facebook URL" />
          </div>
          <div className="form-group social-input">
            <label>
              <i className="fab fa-youtube"></i>
            </label>
            <input type="text" placeholder="YouTube URL" />
          </div>
          <div className="form-group social-input">
            <label>
              <i className="fab fa-linkedin"></i>
            </label>
            <input type="text" placeholder="LinkedIn URL" />
          </div>
          <div className="form-group social-input">
            <label>
              <i className="fab fa-instagram"></i>
            </label>
            <input type="text" placeholder="Instagram URL" />
          </div>
          <input className="btn btn-primary my-1" type="submit" />
          <Link to="/dashboard" className="btn btn-light my-1">
            Go Back
          </Link>
        </form>
      </section>
    );
  }
}

export default CreateProfile;
