//Actions
//useReducer is a Hook.
import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
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
    const initalState={
users:[],
user:{},
repos:[],
loading:false
    }

const [state, dispatch] = useReducer(githubReducer, initialState)




//returning provider - inorder to make it available for entire application
return(<GithubContext.Provider
value={{
users:state.users,
user:state.user,
repos:state.repos,
loading: state.loading
}}>
{props.children}
</GithubContext.Provider>
);

}