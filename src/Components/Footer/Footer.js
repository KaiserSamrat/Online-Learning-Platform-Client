import React from 'react';
import './Footer.css'
import fbImg from '../../images/facebook.png'
import gitImg from '../../images/github.png'

const Footer = () => {
    return (
        <div className="footer" id='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-3 Quick-Links">
                        <h5>About Us</h5>
                        <p>This is a online teaching platform. We tried to teach a student in a way that they can success in professional life. We give the best services in order to support the student </p>

                    </div>
                    <div className="col-md-3 mt-3 Quick-Links">
                        <h5>Quick Links</h5>
                        <ul className='Quick-Links'>
                            <li>Contact</li>
                            <li>Services</li>
                            <li>Our blog</li>
                            <li>Reviews</li>
                            <li>Members</li>
                        </ul>

                    </div>
                    <div className="col-md-3 mt-3 Quick-Links">
                        <h5>Social Links</h5>
                        <img src={fbImg} alt="" className='footer-img mb-1'/>
                        <br/>
                        <img src={gitImg} alt="" className='footer-img'/>

                    </div>
                    <div className="col-md-3 Quick-Links mt-3">
                        <h5>Address</h5>
                        <p>Bashundhara R/A</p>
                    
                        <p>Dhaka,Bangladesh</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;