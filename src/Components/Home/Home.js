import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Instructor from '../Instructor/Instructor';

import Review from '../Review/Review';
import Services from '../Services/Services';
import TeachingMethod from '../TeachingMethod/TeachingMethod';

const Home = () => {
    return (
        <div>
         
          <Header></Header>
          <Services></Services>
          <Review></Review>
          <Instructor></Instructor>
          <TeachingMethod></TeachingMethod>
          <Footer></Footer>
         
        
        
        </div>
    );
};

export default Home;