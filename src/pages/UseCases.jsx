import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import styles from './UseCases.module.css'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { MdArrowLeft } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import Footer from '../components/Footer'
import Fade from 'react-reveal'


const slides=[
    {
        img:'/OutlookCalendarIcon.png',
        header:'Outlook Calendar',
        subHeader:'Calendar',
        content:'With the Outlook Calendar then you get an overview of all your events on a given day in the calendar.'
    },
    {
        img:'/Google Calendar Icon.png',
        header:'Google Calendar',
        subHeader:'Calendar',
        content:"With the Outlook Calendar then you get an overview of all your events on a given day in the calendar."
    },
    {
        img:'/Outlook Email Icon.png',
        header:'Outlook',
        subHeader:'Email',
        content:"With the Outlook integration we pull in all your emails in a list view so you can easily drag over your emails."
    },
    {
        img:'/Trello Logo.png',
        header:'Trello',
        subHeader:'Task Mania',
        content:'The Trello integration allows you to pull in all your boards and cards and plan them in Moodie'
    }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

const UseCases = ({open,setOpen}) => {
  return (
    <>
    <Navbar
    open={open}
    setOpen={setOpen}
    />
    <MobileNav
    open={open}
    setOpen={setOpen}
    />
    <Fade top distance='10%' duration={1550}>
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.sectionOne}>
                <h2>We are Goal Oriented</h2>

                <div className={styles.cards}>
                    <div>
                        <h4>Stay organized</h4>
                        <p>Organize your schedule at a healthy pace, with better results without burning out</p>
                    </div>

                    <div>
                        <h4>Stay organized</h4>
                        <p>Organize your schedule at a healthy pace, with better results without burning out</p>
                    </div>
                </div>
            </div>



            <div className={styles.sectionTwo}>
                <div className={styles.heading}>Integrations</div>

                <div className={styles.subHeading}>
                    <h2>
                    Moodie integrates with all the tools you're already using
                    </h2>

                    <div className={styles.right}>
                        <p>Browse Integrations </p><BsArrowRightShort size={20}/>
                    </div>
                </div>


                <div
                className={styles.swiperContainer}
                >
                <Swiper 
                 slidesPerView={3}
                 spaceBetween={30}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[Pagination]}
                 className="useCase_Swiper"
                >
                {slides.map((slide)=>(
                    <SwiperSlide
                        className={styles.slideContainer}
                        >
                        <div className={styles.slideTop}>
                            <img 
                            src={slide.img}
                            alt='icon'
                            />
                            <h4>{slide.header}</h4>
                            <p>{slide.subHeader}</p>
                        </div>
                        <div>{slide.content}</div>
                    </SwiperSlide>))}
                </Swiper>
                </div>
                
                <div
                className={styles.mobileSwiperContainer}
                >
                <Swiper 
                 slidesPerView={1}
                 spaceBetween={30}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[Pagination]}
                 className="useCase_Swiper"
                >
                {slides.map((slide)=>(
                    <SwiperSlide
                        className={styles.slideContainer}
                        >
                        <div className={styles.slideTop}>
                            <img 
                            src={slide.img}
                            alt='icon'
                            />
                            <h4>{slide.header}</h4>
                            <p>{slide.subHeader}</p>
                        </div>
                        <div>{slide.content}</div>
                    </SwiperSlide>))}
                </Swiper>
                </div>
                </div>
            </div>
       </div>
    </Fade>
    
    <Footer/>
    </>
    
  )
}

export default UseCases