import React from 'react';
import './TeaachingMethod.css'
import codingImg from '../../images/coding.png'
import lecture from '../../images/lecture.png'
import codeIcon from '../../images/codeicon.png'

const TeachingMethod = () => {
    return (
        <div  className="method">
            <div className='container mt-5'>
            <h1 className="mb-3 text-center">Our Method</h1>
            <div className="row">
                <div className="col-md-4">

                    <div class="card mb-4">
                        <img className="method-img img-fluid" src={codingImg} alt="..." />
                        <div class="card-body">
                            <ul className='method-details'>
                                <li class="card-title">Content Created By Specialist</li>
                                <li class="card-title">Always supported by industry professionals</li>

                                <li class="card-title">Content is upto the mark with industry requirements</li>
                            </ul>


                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    
                <div class="card mb-4">
                        <img className="method-img img-fluid" src={lecture} alt="..." />
                        <div class="card-body">
                            <ul>
                                <li class="card-title">Take proper assessment</li>
                                <li class="card-title">Give assignment for every topic</li>

                                <li class="card-title">Check Assignment in details and mark it properly</li>
                            </ul>


                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    
                <div class="card mb-4">
                        <img className="method-img img-fluid" src={codeIcon} alt="..." />
                        <div class="card-body">
                            <ul>
                                <li class="card-title">Direct help from the mentors through meet session</li>
                                <li class="card-title">You can finish this course entirely in online</li>

                                <li class="card-title">Course completion certificate</li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default TeachingMethod;