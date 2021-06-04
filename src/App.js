import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./components/context/github/GithubState";

import React, { useState, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // const searchUsers = async (user) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
  //   );

  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // const getUser = async (username) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
  //   );

  //   setUser(res.data);
  //   setLoading(false);
  // };

  // const getUserRepos = async (username) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
  //   );

  //   setRepos(res.data);
  //   setLoading(false);
  // };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <div className='container'>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => <User {...props} />}
              />
            </div>
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
