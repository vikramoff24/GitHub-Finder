//Actions
//useReducer is a Hook.
import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

//Inital State for GitHub
const GithubState=props=>
{
    const initialState={
users:[],
user:{},
repos:[],
loading:false
    }

const [state, dispatch] = useReducer(GithubReducer, initialState)
//Actions

//Search Users
const searchUsers=async text=>
{
  setLoading();
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&
  client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//   setUsers(res.data.items);
//   setLoading(false);
dispatch({
    type: SEARCH_USERS,
    payload:res.data
})
};


//Set Loading
const setLoading=()=> dispatch({type:SET_LOADING});


//returning provider - inorder to make it available for entire application
return(<GithubContext.Provider
value={{
users:state.users,
user:state.user,
repos:state.repos,
loading: state.loading
}}>
{/* wrapping entire application in this provider */}
{props.children} 
</GithubContext.Provider>
);

}

export default GithubState