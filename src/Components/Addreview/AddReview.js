import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [review, setReview] = useState({
        userName: user.name,
        email: user.email,
        userImage: user.img

    });




    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your review is successfully added')
                history.replace('/');
            })
    }

    const handleOnBlur = (e) => {
        const newReview = review;
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <Link to='/userOrder'><button className='btn btn-success me-2'>Order List</button></Link>
                        <br />
                        <br />
                        <Link to='/addReview'><button className='btn btn-success'>Add Review</button></Link>
                        <br/>
                        <br/>
                        <Link href="#services-area"><button className='btn btn-success'>Register Course</button></Link>
                    </div>
                    <div className="col-md-8 bg-light mt-5">
                        <h3>Add Review</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onBlur={handleOnBlur} name="userName" className="form-control" placeholder="Your Name" value={user.name} required /> <br />
                            <input type="text" onBlur={handleOnBlur} name="coursName" className="form-control" placeholder="Course Name" required /> <br />
                            <textarea className="form-control" type="text" onBlur={handleOnBlur} name="description" placeholder="Course Description" required /><br />
                            <p>User Image Url</p>
                            <input type="text" onBlur={handleOnBlur} name="userImage" className="form-control" placeholder="Your Name" value={user.img} /> <br />



                            <button className="btn btn-primary mb-2">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;