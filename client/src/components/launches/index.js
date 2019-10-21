import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from '../launchItem';
import MissionKey from '../missionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      links {
        mission_patch_small
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="my-3">Launches</h2>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return <p>error</p>;
            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem
                    key={launch.flight_number}
                    launch={launch}
                    selectLaunch={this.props.selectLaunch}
                    isSelected={
                      launch.flight_number === this.props.selectedLaunch
                    }
                  />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
