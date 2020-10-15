import React, { Fragment,useState} from "react";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User"
import Search from "./components/users/Search";
import axios from 'axios'; // it is used for working with apis 
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import "./App.css";
//Getting State from Context API
import GithubState from "./components/context/github/GithubState"
const App =()=> {

 const [users,setUsers]=useState([]);
 const [user,setUser]=useState({});
 const [repos,setRepos]=useState([]);
 const [loading,setLoading]=useState(false);
 const [alert,setAlert]=useState(null);

//Get single GitHub user

const getUser=async (userName)=>{
  setLoading(true);
 const res= await axios.get(`https://api.github.com/users/${userName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 setUser(res.data);
 setLoading(false);
}

//Get single GitHub Repos

const getUserRepos =async (userName)=>{
  setLoading(true);
  const res= await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //this.setState({repos:res.data, loading:false});
  setRepos(res.data);
  setLoading(false);
 }

const clearUsers=()=>
{
  setUsers([]);
  setLoading(false);
} 

const showAlert=(msg,type)=>
{
setAlert({
  // msg:msg,
  // type:type
  // both the property and value is same 
  msg,type
})
setTimeout(()=>setAlert(null),3000);
} 
    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={alert}/>
        <Switch>

        {/* Routing the site to home page */}
        <Route exact path='/' render ={(props)=>(
          <Fragment>
        <Search clearUsers={clearUsers} showClear={
            users.length>0?true:false} setAlert={showAlert}/>
          <Users/>
          </Fragment>
        )} />

         {/* Routing the site to About page */}
         {/* Only SingleComponent is rendered ,we use compoent props. for this about component we do not send any props to it*/}
       <Route exact path="/about" component={About}/>
       {/* Routing to single User component */}
       <Route exact path="/user/:login" render={(props)=><User {...props}
        getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos}
        repos={repos} />
        }/>
</Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;
