import React, { Component } from 'react';

class Login extends Component {
  _login = () => {
    alert('login')
  }
  render() {
    return (
      <div>
        <h1 style={{color: 'blue'}}> Login component </h1>
        <button onClick={this._login}> login</button>
      </div>
    )
  }
}

export default Login;
