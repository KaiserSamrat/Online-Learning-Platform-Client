import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'
import reviewData from '../FakeData/reviewData.json'


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className="review my-5 py-5" id='review-area'>
        <div className="container">
            <div className="section-header text-center">
                <h5 className=" text-center testimonial">Testimonial</h5>
                <h2 className='review-title'>Student Reviews</h2>
            </div>
           
            <div className="card-deck mt-5 row">
                 {
                    review.map(review => <ReviewDetails review={review} key={review.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Review;