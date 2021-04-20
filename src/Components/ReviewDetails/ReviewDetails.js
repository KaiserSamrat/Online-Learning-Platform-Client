import React, { useEffect, useState } from 'react';
import './Reviewdetails.css'
const ReviewDetails = (props) => {
    const { description, userName, userImage, date,coursName } = props.review;
    const user = JSON.parse(localStorage.getItem('user'));
   
    return (
        <div className="card shadow-sm col-md-4 ">
            <div className=" d-flex  align-items-center">
                <img className="mx-3 review-image" src={userImage} alt="" width="80" />
                <div>
                    <h4 className="text-info">{userName}</h4>
                    <h5>{coursName}</h5>
                  
                </div>
            </div>
            <div className="card-body">

                <p className="card-text mt-4 review-des">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;