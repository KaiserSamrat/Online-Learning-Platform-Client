import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    
    return (
        <div id='services-area'>
          
            <section className='mt-5'>
                <div className='text-center'>
                    <h5 className='service-title'>Our Courses</h5>
                    <h2 className='service-pro'>Courses we provide</h2>
                </div>
            </section>

            <div className="d-flex justify-content-center">
                <div className="w-75 row  mt-5 pt-5 ">
                    {
                        course.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;