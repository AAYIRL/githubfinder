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

  //Get User

  //Get repos

  //Set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};
