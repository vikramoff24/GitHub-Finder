//Actions
//useReducer is a Hook.
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";
//Code for deployment on netlify
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

//Inital State for GitHub
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Actions

  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
  client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    //   setUsers(res.data.items);
    //   setLoading(false);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Get User

  const getUser = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  //Get Repo
  const getUserRepos = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //returning provider - inorder to make it available for entire application
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos, //to use that function we need to add like this. Inorder to use by component.
      }}
    >
      {/* wrapping entire application in this provider */}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
