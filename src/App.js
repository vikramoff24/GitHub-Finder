import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'; // it is used for working with apis 
import "./App.css";

class App extends Component {

  state={
     users:[],
     loading: false
   };
  
  async componentDidMount() //called when component gets mounted.
  {
   this.setState({loading:true});
   const res = await axios.get("https://api.github.com/users");
   this.setState({users:res.data, loading:false});
   console.log(res.data);
   
    //axios.get("https://api.github.com/users").then(res=> console.log(res.data));
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
