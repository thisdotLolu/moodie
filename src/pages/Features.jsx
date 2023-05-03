import React from 'react'
import FeatureSection from '../components/FeatureSection'
import Navbar from '../components/Navbar'
import styles from './Features.module.css'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import { Fade} from "react-awesome-reveal";


const features=[
    {
        icon:'/trackerFeatureIcon.png',
        header:'Tracker',
        text:'The integrations we have built from Moodie app enables you to work much more efficiently, as you can track your mood daily, weekly and monthly.',
        img:"/trackerImage.png",
        absoluteImg:'./Productivity.png',
    },
    {
        icon:'/Pen Icon.png',
        header:'Calendar Events',
        text:'We know how important it is to stay on top of your meetings, and overall schedule. Therefore you can attach all your calendars in Moodie, so you have an overview of your events, right next to all your tasks.',
        img:"/calendarEvents.png",
    }
]


const Features = ({open,setOpen}) => {
  return (
    <Fade>
        <div className={styles.outerContainer}>
    <div className={styles.container}>
        <div className={styles.inner}>
        <Navbar
        open={open}
        setOpen={setOpen}
       />
       <MobileNav
       open={open}
       setOpen={setOpen}
       />
  
            <div className={styles.heroText}>
                <h2>Meditate all day long!</h2>
                <p>With Moodie, you have the opportunity to sit at home or anywhere and meditate to cleanse your body and mind. We give you over one million sounds to get you going.</p>
                <div className={styles.buttons}>
                <button>
                Tracker
                <img src='/trackerIcon.png' alt='tracker'/>
                </button>
                <button>
                Events
                <img 
                alt='events'
                src='/eventsIcon.png'/>
                </button>
                </div>
                
                
            </div>

           
        </div>
        <img 
     className={styles.slant}
     alt='slant'
     src='bottomSlant.png'/>
    </div>

    <div className={styles.sectionTwo}>
        {
            features.map(feature=>(
                <FeatureSection
                iconSrc={feature.icon}
                header={feature.header}
                text={feature.text}
                imgSrc={feature.img}
                absoluteImg={feature.absoluteImg}
                />
            ))
        }
    </div>
    <Footer/>
    </div>
    </Fade>
    
    
  )
}

export default Features