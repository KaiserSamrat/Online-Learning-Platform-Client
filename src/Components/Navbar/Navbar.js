import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Your Tutor</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3" to="/">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3" to="/">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3" to="/">Courses</Link>
              </li>
             <Link to='/dashboard'> <button className='btn btn-success me-3'>DashBoard</button></Link>
             <Link to='/Login'> <button className='btn btn-info me-3'>Login</button></Link>

              
             
            </ul>
           
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;