import React from 'react';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import TopStuden from '../TopStudent/TopStuden';

const TopStudentPromise = fetch("http://localhost:3000/top-student").then(res => res.json())
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopStuden TopStudentPromise={TopStudentPromise}></TopStuden>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;