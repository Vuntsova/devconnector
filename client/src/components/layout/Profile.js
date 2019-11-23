import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/developers" className="btn">
          Back To Profiles
        </Link>
        <div className="profile-grid my-1">
          {/* Top */}
          <div className="profile-top bg-primary p-2">
            <img
              src="https://www.gravatar.com/avatar/7b097d116a6400018722290062ec9a07?s=200"
              className="round-img my-1"
              alt=""
            />
            <h1 className="large">Emiliya Vuntsova</h1>
            <p className="lead">Developer at NASA</p>
            <p>Orlando, FL</p>
            <div className="icons my-1">
              <Link to="">
                <i className="fas fa-globe fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </div>
          </div>
          {/* About */}
          <div className="profile-about bg-light p-2">
            <h2 className="text-primary">Emiliya's bio</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <div className="line"> </div>
            <h2 className="text-primary">Skills Set</h2>
            <div className="skills">
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> HTML
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> CSS
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> JavaScript
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> Python
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> React
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> Node
              </div>
            </div>
            <div className="skills">
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> HTML
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> CSS
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> ES6
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> Python
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> React
              </div>
              <div className="px-1">
                <i className="fab fa-connectdevelop"></i> Node
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>
            <div className="experience">
              <h3>NASA</h3>
              <p>Oct 2015 - Current</p>
              <p>
                <strong>Position:</strong> Software Developer
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs.
              </p>
            </div>
            <div className="experience">
              <h3>NCSA</h3>
              <p>Oct 2015 - Current</p>
              <p>
                <strong>Position:</strong> Software Developer
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs.
              </p>
            </div>
            <div className="experience">
              <h3>Apple</h3>
              <p>Oct 2015 - Current</p>
              <p>
                <strong>Position:</strong> Software Developer
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs.
              </p>
            </div>
          </div>
          {/* Education */}
          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            <div className="education">
              <h3>UCF</h3>
              <p>Jab 2015 - Aug 2017</p>
              <p>
                <strong>Degree:</strong> Masters
              </p>
              <p>
                <strong>Filed of Study:</strong> Computer Science
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs.
              </p>
            </div>
            <div className="education">
              <h3>UCF</h3>
              <p>Jab 2015 - Aug 2017</p>
              <p>
                <strong>Degree:</strong> Masters
              </p>
              <p>
                <strong>Filed of Study:</strong> Computer Science
              </p>
              <p>
                <strong>Description:</strong> Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs.
              </p>
            </div>
          </div>
          {/* Github Repos*/}
          <div className="profile-github bg-dark p-2">
            <h2 className="text-primary">
              <i className="fab fa-github"> </i> Github Repos
            </h2>
            <div className="repo my-1">
              <div>
                <h4>
                  <Link to="">Repo One</Link>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </h4>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">Starr: 44</li>
                  <li className="badge badge-primary">Watchers: 44</li>
                  <li className="badge badge-primary">Forks: 44</li>
                </ul>
              </div>
            </div>
            <div className="repo my-1">
              <div>
                <h4>
                  <Link to="">Repo One</Link>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </h4>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">Starr: 44</li>
                  <li className="badge badge-primary">Watchers: 44</li>
                  <li className="badge badge-primary">Forks: 44</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
