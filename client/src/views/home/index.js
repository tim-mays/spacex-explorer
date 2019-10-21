import React, { Component } from 'react';
import Launches from '../../components/launches';
import LaunchDetail from '../../components/launchDetail';

class Home extends Component {
  state = {
    selectedFlightNumber: 1
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Launches
              selectLaunch={this.selectLaunch}
              selectedLaunch={this.state.selectedFlightNumber}
            />
          </div>
          <div className="col d-none d-sm-block">
            <div className="card card-body sticky-top mt-5">
              <LaunchDetail flightNumber={this.state.selectedFlightNumber} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  selectLaunch = flightNumber => {
    this.setState({ selectedFlightNumber: flightNumber });
  };
}
export default Home;
