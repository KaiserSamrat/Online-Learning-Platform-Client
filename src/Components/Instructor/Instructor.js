import React from 'react';
import './Instructor.css'
import sirImg from '../../images/mahbub.jpg'
import moshImg from '../../images/mosh.jpg'
import sentImg from '../../images/corey.png'

const Instructor = () => {
    return (
        <div className="container">
            <h2 className='text-center mb-5'>Our Instructor</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="image-area">
                        <img src={sirImg}></img>

                    </div>
                    <div className="description mt-2">
                        <h3 className='text-center sir-name'>Jhankar Mahbub</h3>
                        <h6 className='text-center  sir-description'>He is the best tutor you can ask for!! He is one of the best teachers in our country who can guide you to master in Full Stack Web Development.</h6>
                    </div>

                </div>
                <div className="col-md-4">
                <div className="image-area">
                        <img src={moshImg}></img>

                    </div>
                    <div className="description mt-2">
                        <h3 className='text-center sir-name'>Mosh</h3>
                        <h6 className='text-center  sir-description'>Mosh is very good at teaching. he is very passionate towards his teaching.</h6>
                    </div>

                </div>
                <div className="col-md-4">
                <div className="image-area">
                        <img  src={sentImg}></img>

                    </div>
                    <div className="description mt-2">
                        <h3 className='text-center sir-name'>Corey Schafer</h3>
                        <h6 className='text-center sir-description'>Corey Schafer is very good for teaching python. his teaching method is very effective.</h6>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Instructor;