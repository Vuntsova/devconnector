import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Developers from './components/layout/Developers';
import Register from './components/layout/Register';
import Login from './components/layout/Login';
import Profile from './components/layout/Profile';
import Dashboard from './components/layout/Dashboard';
import CreateProfile from './components/layout/CreateProfile';
import AddExperience from './components/layout/AddExperience';
import AddEducation from './components/layout/AddEducation';
import Posts from './components/layout/Posts';
import Post from './components/layout/Post';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <section className="container">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/developers" component={Developers} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create-profile" component={CreateProfile} />
        <Route exact path="/add-experience" component={AddExperience} />
        <Route exact path="/add-education" component={AddEducation} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post" component={Post} />
      </section>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
