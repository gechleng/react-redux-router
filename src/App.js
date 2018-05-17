import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route   } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
        </div>
      </div>
    );
  }
}

export default App;
