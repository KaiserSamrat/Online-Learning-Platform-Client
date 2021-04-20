import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { _id, author, img, description } = props.service
    return (
        <div className='col-md-4 text-center service-animation'>
            <img style={{ height: '50px' }} src={img} className='img-fluid'></img>
            <h5 className='mt-3 mb-3'>{author}</h5>
            <p className='service-description'>{description}</p>
            <Link to={`/serviceCart/${_id}`}><button className='btn btn-success'>Register</button></Link>

        </div>

    );
};

export default ServiceDetails;