import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import LaunchDashboard from './views/launchDashboard';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.children}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/launch-dashboard/:flight_number">
              <LaunchDashboard />
            </Route>
            <Route exact path="/launch-dashboard">
              <LaunchDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
