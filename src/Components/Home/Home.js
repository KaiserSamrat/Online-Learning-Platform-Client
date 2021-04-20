import React from 'react';
import Header from '../Header/Header';
import Instructor from '../Instructor/Instructor';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         
          <Header></Header>
          <Services></Services>
          <Review></Review>
          <Instructor></Instructor>
        </div>
    );
};

export default Home;