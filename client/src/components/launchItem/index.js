import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class LaunchItem extends Component {
  render() {
    const {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success,
      links
    } = this.props.launch;
    const { isSelected } = this.props;
    return (
      <div
        className={classNames('card', 'card-body', 'mb-3', {
          'border-info': isSelected
        })}
      >
        <div className="row">
          <div className="col-lg-8">
            <h4>
              Mission:{' '}
              <span
                className={classNames({
                  'text-success': launch_success,
                  'text-danger': !launch_success
                })}
              >
                {mission_name}
              </span>
            </h4>
            <p>
              Date:{' '}
              <Moment format="MM/DD/YYYY HH:mm">{launch_date_local}</Moment>
            </p>
            <div className="w-100">
              <img
                src={links.mission_patch_small}
                width="150"
                alt={`${mission_name} mission patch`}
                className="mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="w-100">
              <button
                onClick={() => {
                  this.props.selectLaunch(flight_number);
                }}
                className="btn btn-primary mt-3 d-none d-sm-block mx-auto"
              >
                View
              </button>
              <Link
                to={`/launch-dashboard/${flight_number}`}
                className="btn mt-3 btn-primary d-sm-none d-block mx-auto"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LaunchItem.propTypes = {
  launch: PropTypes.object.isRequired
};

export default LaunchItem;
