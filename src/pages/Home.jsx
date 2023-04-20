import React from 'react';
import Community from '../components/Community';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';



const Home = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <SectionOne/>
       <SectionTwo/>
       <Community/>
    </>
  )
}

export default Home