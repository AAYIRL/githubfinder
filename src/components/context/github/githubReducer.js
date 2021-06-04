import {
  SEARCH_USERS,
  GET_USER,
  //   SET_ALERT,
  SET_LOADING,
  //   REMOVE_ALERT,
  GET_REPOS,
} from "../types";

const final = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default final;
