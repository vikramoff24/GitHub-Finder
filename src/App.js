import React, { Fragment,useState} from "react";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User"
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import "./App.css";
//Getting State from Context API
import GithubState from "./components/context/github/GithubState"
const App =()=> {

const [alert,setAlert]=useState(null);

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
        <Search setAlert={showAlert}/>
          <Users/>
          </Fragment>
        )} />

         {/* Routing the site to About page */}
         {/* Only SingleComponent is rendered ,we use compoent props. for this about component we do not send any props to it*/}
       <Route exact path="/about" component={About}/>
       {/* Routing to single User component */}
       <Route exact path="/user/:login" component={User}
         />
        }/>
</Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;
