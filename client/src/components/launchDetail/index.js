import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LauchQuery($flightNumber: Int!) {
    launch(flight_number: $flightNumber) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

class LaunchDetail extends Component {
  render() {
    const { flightNumber } = this.props;
    return flightNumber ? (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flightNumber }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return <p>Error</p>;

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_name, rocket_type }
            } = data.launch;
            return (
              <Fragment>
                <h2 className="my-3">
                  <span>Mission:</span> {mission_name}
                </h2>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Flight Successful:{' '}
                    <span
                      className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                      })}
                    >
                      {' '}
                      {launch_success ? 'Yes' : 'No'}
                    </span>
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    Rocket Name: {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket Type: {rocket_type}
                  </li>
                </ul>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    ) : (
      <p>TODO: build Launch search</p>
    );
  }
}

LaunchDetail.propTypes = {
  flightNumber: PropTypes.number
};

export default LaunchDetail;
