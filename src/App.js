import React, { Fragment,Component } from "react";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User"
import Search from "./components/users/Search";
import axios from 'axios'; // it is used for working with apis 
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import "./App.css";

class App extends Component {

  state={
     users:[],
     loading: false,
     alert:null, 
     user:{}
   };
// async componentDidMount() //called when component gets mounted.
  // { 

  //  this.setState({loading:true});
  //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //  this.setState({users:res.data, loading:false});
  //  console.log(res.data);
  //  //axios.get("https://api.github.com/users").then(res=> console.log(res.data));
  // }
searchUsers=async text=>
{
  this.setState({loading:true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  this.setState({users:res.data.items, loading:false});
}

//Get single GitHub user

getUser =async (userName)=>{
 const res= await axios.get(`https://api.github.com/users/${userName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 this.setState({user:res.data, loading:false});
}

clearUsers=()=>
{
  this.setState({users:[], loading:false});

 
} 

setAlert=(msg,type)=>
{
this.setState({alert:{
  // msg:msg,
  // type:type
  // both the property and value is same 
  msg,type
}})
setTimeout(()=>this.setState({alert:null}),3000);
} 
render() {

  const{users,loading,alert,user}=this.state;
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={alert}/>
        <Switch>

        {/* Routing the site to home page */}
        <Route exact path='/' render ={(props)=>(
          <Fragment>
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={
            this.state.users.length>0?true:false} setAlert={this.setAlert}/>
          <Users loading={loading} users={users}    />
          </Fragment>
        )} />

         {/* Routing the site to About page */}
         {/* Only SingleComponent is rendered ,we use compoent props. for this about component we do not send any props to it*/}
       <Route exact path="/about" component={About}/>
       {/* Routing to single User component */}
       <Route exact path="/user/:login" render={(props)=><User {...props} getUser={this.getUser} user={user} loading={loading}/>
        }/>
</Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
