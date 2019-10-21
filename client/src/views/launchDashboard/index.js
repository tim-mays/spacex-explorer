import React from 'react';
import { useParams } from 'react-router-dom';
import LaunchDetail from '../../components/launchDetail';

const LaunchDashboard = () => {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <LaunchDetail flightNumber={flight_number} />
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
