import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import './Servicescart.css'

const ServiceCart = () => {
    const history = useHistory();
    const {id} = useParams();
    const [courseInfo, setCourseInfo] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    const [userInfo, setUserinfo] = useState({
        userName: user.name,
        email: user.email,
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://fierce-savannah-48718.herokuapp.com/addCart`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
        .then(res=> res.json())
        .then(data => {
            alert('your order is successful')
            history.replace('/')
        })

    }
    useEffect(()=>{
        fetch(`https://fierce-savannah-48718.herokuapp.com/service/${id}`)
        .then(res =>res.json())
        .then(data => {
            setCourseInfo(data);
            const newCart = { ...userInfo }
            newCart.courseName = data.name
            newCart.courseDescription = data.description
            newCart.img = data.img
            
            setUserinfo(newCart)
        })
    },[])
    return (
        <div>
            <section class="container-fluid justify-content-center mb-5 ">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-md-3">
                        <form class="login-area mb-5" onSubmit={handleSubmit}>
                            <h5 class="text-info text-center title">Checkout Page</h5>
                            <div class="form-group">
                                <input type="text" class="form-control" name="userName" value={user.name} placeholder="UserName"  />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="email" class="form-control" name="userEmail" value={user.email} placeholder="User Email"  />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="text" class="form-control" name="courseName" value={courseInfo.name} placeholder="Course Name"  />
                            </div>
                           
                           
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceCart;