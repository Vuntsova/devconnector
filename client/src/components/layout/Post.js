import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/posts" className="btn">
          Back To Posts
        </Link>
        <div className="post bg-white my-1">
          <div>
            <Link to="/profile">
              <img
                src="https://www.gravatar.com/avatar/25e460b479e2e5b48aec07710c08d50?s=200"
                className="round-img"
                alt=""
              />
            </Link>
            <h4>
              <Link to="/profile">Emiliya Vuntsova</Link>
            </h4>
            <small>
              <label for="file">Dev Power</label>
              <progress id="file" max="100" value="70">
                70%
              </progress>
            </small>
          </div>
          <div>
            <div className="title">
              <strong>SASS Fundametals</strong>
              <small>01/01/2019</small>
            </div>
            <p className="my-1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
            <button className="btn">
              <i className="fas fa-thumbs-up"></i> <span>95</span>
            </button>
            <button className="btn">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to="/post" className="btn btn-primary">
              Discussion
            </Link>
          </div>
        </div>
        <div className="post-form">
          <h3 className="bg-primary post-form-title">Leave a Comment</h3>
          <form className="form">
            <div className="form-group">
              <textarea
                rows="4"
                cols="50"
                type="text"
                name="description"
                placeholder="Comment post"
              />
            </div>
            <div className="my-1">
              <input type="submit" className="btn btn-dark"></input>
            </div>
          </form>
        </div>
        <div className="posts my-2">
          <div className="post bg-white my-1">
            <div>
              <Link to="/profile">
                <img
                  src="https://www.gravatar.com/avatar/25e460b479e2e5b48aec07710c08d50?s=200"
                  className="round-img"
                  alt=""
                />
              </Link>
              <h4>
                <Link to="/profile">Emiliya Vuntsova</Link>
              </h4>
              <small>
                <label for="file">Dev Power</label>
                <progress id="file" max="100" value="20">
                  20%
                </progress>
              </small>
            </div>
            <div>
              <div className="title">
                <strong>SASS Fundametals</strong>
                <small>01/01/2019</small>
              </div>
              <p className="my-1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <button className="btn">
                <i className="fas fa-thumbs-up"></i> <span>95</span>
              </button>
              <button className="btn">
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to="/post" className="btn btn-primary">
                Discussion
              </Link>
            </div>
          </div>
          <div className="post bg-white my-1">
            <div>
              <Link to="/profile">
                <img
                  src="https://www.gravatar.com/avatar/25e460b479e2e5b48aec07710c08d50?s=200"
                  className="round-img"
                  alt=""
                />
              </Link>
              <h4>
                <Link to="/profile">Emiliya Vuntsova</Link>
              </h4>
              <small>
                <label for="file">Dev Power</label>
                <progress id="file" max="100" value="70">
                  70%
                </progress>
              </small>
            </div>
            <div>
              <div className="title">
                <strong>SASS Fundametals</strong>
                <small>01/01/2019</small>
              </div>
              <p className="my-1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <button className="btn">
                <i className="fas fa-thumbs-up"></i> <span>95</span>
              </button>
              <button className="btn">
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to="/post" className="btn btn-primary">
                Discussion
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
