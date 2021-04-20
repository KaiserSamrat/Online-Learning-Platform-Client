import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Addcourse = () => {
    const [course, setCourse] = useState({});
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addCourse', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(course)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Item is successfully added')
                history.replace('/');
            })
    }

    const handleOnBlur = (e) => {
        const newCourse = course;
        newCourse[e.target.name] = e.target.value;
        setCourse(newCourse);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                        <h3>Add new Event</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onBlur={handleOnBlur} name="name" className="form-control" placeholder="Course Name" required /> <br />
                            <input className="form-control" type="text" onBlur={handleOnBlur} name="description" placeholder="Course Price" required /><br />
                            <input className="form-control" type="text" onBlur={handleOnBlur} name="img" placeholder="Image URL" required /><br />
                            <button className="btn btn-primary">Add Event</button>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Addcourse;