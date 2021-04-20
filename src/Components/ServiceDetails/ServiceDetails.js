import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { _id, author
        , img, description } = props.service
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: '50px' }} src={img} className='img-fluid'></img>
            <h5 className='mt-3 mb-3'>{author
            }</h5>
            <p>{description}</p>
            <Link to={`/serviceCart/${_id}`}><button className='btn btn-success'>Register</button></Link>

        </div>

    );
};

export default ServiceDetails;