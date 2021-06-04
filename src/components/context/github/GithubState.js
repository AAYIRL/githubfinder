import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  //   SET_ALERT,
  SET_LOADING,
  //   REMOVE_ALERT,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Search users

  const searchUsers = async (user) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Get User

  //Get repos

  //Set loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
