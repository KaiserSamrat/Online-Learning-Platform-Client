import React, { useEffect, useState } from 'react';

const ReviewDetails = (props) => {
    const { description, userName, userImage, date,coursName } = props.review;
    const user = JSON.parse(localStorage.getItem('user'));
    // const [userInfo, setUserinfo] = useState({
    //     userName: user.name,
       
    // })
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserinfo(data);
    //             const newUser = { ...userInfo }
    //             newUser.eventName = data.name
    //             newUser.eventDescription = data.description
    //             newUser.img = data.img
    //             setUserinfo(newRegistrationData)
    //         })
    // }, [])

    return (
        <div className="card shadow-sm col-md-4 ">
            <div className=" d-flex  align-items-center">
                <img className="mx-3" src={userImage} alt="" width="60" />
                <div>
                    <h4 className="text-primary">{userName}</h4>
                    <h5>{coursName}</h5>
                  
                </div>
            </div>
            <div className="card-body">

                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;