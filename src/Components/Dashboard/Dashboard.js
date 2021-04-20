import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='container dash'>
      <div className="row">
        <div className="col-md-6">
          <div class="card">
            <div class="card-header">
              Admin
  </div>
            <div class="card-body text-center">
              <h3 class="card-title">Admin</h3>
              <h5 class="card-text text-danger">Only For admin usage</h5>
              <Link to='/allregistration'> <div className="btn btn-primary">Click Here</div></Link>

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card">
            <div class="card-header">
              User
  </div>
            <div class="card-body text-center">
              <h3 class="card-title text-">User</h3>
              <h5 class="card-text text-danger">Only For User usage</h5>
              <Link to='/userOrder'> <div className="btn btn-primary">Click Here</div></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;