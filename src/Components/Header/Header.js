import React from 'react';
import studyImage from '../../images/coder.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-light'>
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-md-7" >
                        <img class="d-block w-100" src={studyImage}alt=""/>
                    </div>
                    <div class="col-md-4" >
                        <h1 className='title'>YourTutor</h1>
                        <h2>Be the Boss of Coding</h2>
                        <p className='header-desc'>This is the best online teaching platform for leaning programming</p>
                        <a href="#services-area"><button class="btn btn-warning">Register</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;