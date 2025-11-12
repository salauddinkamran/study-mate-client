import React from 'react';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className='text-5xl text-red-400 font-semibold text-center mt-10'>This is home section</h1>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;