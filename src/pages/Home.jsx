import React, { useState } from 'react';
import Community from '../components/Community';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MobileNav from '../components/MobileNav';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import People from '../components/People';
import SectionOne from '../components/SectionOne';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';
import Statistics from '../components/Statistics';
import Testimonies from '../components/Testimonies';
import Fade from 'react-reveal'


const Home = ({open,setOpen}) => {
  
  return (
    <>
       <MobileNav
       open={open}
       setOpen={setOpen}
       />
       <Navbar
        open={open}
        setOpen={setOpen}
       />
       <Fade top distancee="20%">
       <Hero/>
       <SectionOne/>
       <Partners/>
       <SectionTwo/>
       <Community/>
       <SectionThree/>
       <Statistics/>
       <Testimonies/>
       <People/>
       <Footer/>
       </Fade>
       
    </>
  )
}

export default Home