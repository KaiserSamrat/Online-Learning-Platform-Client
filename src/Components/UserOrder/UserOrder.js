import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleOrder from '../SingleOrder/SingleOrder';
import './userOrder.css'

const UserOrder = () => {
    const [orderinfo,setOrderInfo] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(()=>{
        fetch(`http://localhost:5000/bookList/${user.email}`)
        .then(res => res.json())
        .then(data =>setOrderInfo(data))
    },[])
    return (
        <div className='container'>
            <div className=" list">
            <Link to='/userOrder'><button className='btn btn-success me-2'>Order List</button></Link>
               
            <Link to='/addReview'><button className='btn btn-success me-2'>Add Review</button></Link>
            <Link to='/'><button className='btn btn-success'>Register Course</button></Link>
           
            </div>
            <h1 className='text-center mb-3'>Your Order List</h1>
            <div className='row'>
            {
                orderinfo.map(order => <SingleOrder order={order}></SingleOrder>)
            }
        </div>
        </div>
    );
};

export default UserOrder;