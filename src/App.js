import React from "react";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import "./App.css";
//Getting State from Context API
import GithubState from "./components/context/github/GithubState"
import AlertState from './components/context/alert/AlertState'
const App =()=> {

return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert/>
        <Switch>

        {/* Routing the site to home page */}
        <Route exact path='/' component ={Home} />

         {/* Routing the site to About page */}
         {/* Only SingleComponent is rendered ,we use compoent props. for this about component we do not send any props to it*/}
       <Route exact path="/about" component={About}/>
       {/* Routing to single User component */}
       <Route exact path="/user/:login" component={User}
         />
        
</Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
        }

export default App;
