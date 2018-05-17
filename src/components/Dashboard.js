import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Contact from './Contact';
import About from './About';

class Dashboard extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    if(!match){
      return <div/>
    }

    return (
      <div style={{flex: 1}}>
        <div style={{flex: 1}}>
          <h1 style={{color: 'blue'}}>
            Dashboard component
          </h1>
          <div>
            <ul>
              <li><Link to={`${match.url}/123`}>Contact</Link></li>
              <li><Link to={`${match.url}/about`}>about</Link></li>
            </ul>
          </div>
        </div>

        <div style={{flex: 1, paddingTop: 20}}>
          <Switch>
            <Route exact path={`${match.url}/about`} component={About}/>
            <Route exact path={`${match.url}/:id`} component={Contact}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Dashboard;
