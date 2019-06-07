import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from './axios';

import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';

import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  state = {}

  _onLogin = () => {
    axios
      .post('/api/auth/login', {
        username: "admin",
        password: "123456"
      })
      .then(response =>
        this.setState({
          username: response.data.user.username,
          id: response.data.user._id
        })
        // console.log(response.data.user.username)
      )
      .catch(err => console.log(err));
  }


  render () {


    return (      
      <BrowserRouter>
        <div className="App">
            <Route exact path="/" render={(props)=> 
              <HomeScreen 
              {...props}
              username ={this.state.username} 
              onLogin= {this._onLogin} />
            } />
            <Route path="/posts/:postId" render={(props)=>
              <DetailScreen
              {...props}
              username ={this.state.username} 
              onLogin= {this._onLogin} />
            } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;