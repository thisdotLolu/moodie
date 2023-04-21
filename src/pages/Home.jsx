import React from 'react';
import Community from '../components/Community';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SectionOne from '../components/SectionOne';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';
import Statistics from '../components/Statistics';
import Testimonies from '../components/Testimonies';



const Home = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <SectionOne/>
       <SectionTwo/>
       <Community/>
       <SectionThree/>
       <Statistics/>
       <Testimonies/>
    </>
  )
}

export default Home