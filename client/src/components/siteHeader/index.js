import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  const homeRouteMatch = useRouteMatch({
    path: '/',
    exact: true,
    strict: false
  });
  const launchDashRouteMatch = useRouteMatch({
    path: '/launch-dashboard/:flight_number',
    exact: true,
    strict: false
  });
  const launchDashNoParamRouteMatch = useRouteMatch({
    path: '/launch-dashboard',
    exact: true,
    strict: false
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        SpaceX Explorer
        <small className="d-block text-warning">
          Discover The Possibilities
        </small>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li
            className={classNames('nav-item', {
              active: homeRouteMatch !== null
            })}
          >
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li
            className={classNames('nav-item', {
              active:
                launchDashRouteMatch !== null ||
                launchDashNoParamRouteMatch !== null
            })}
          >
            <Link className="nav-link" to="/launch-dashboard">
              Launch Dashboard
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
