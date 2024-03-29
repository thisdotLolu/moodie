import React from 'react'
import styles from './Hero.module.css'
import {BsArrowRightShort} from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";
import {Zoom} from 'react-awesome-reveal'
import { Link } from 'react-router-dom';


const Hero = () => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.left}>
                <h2>Welcome to your <span style={{color:'#5F51C2'}}>New Home</span> <br /> away from Home!</h2>
                
                <p>Mindfulness on-the-go for international students, one mind at a time. We are your mental health companion on the journey to success</p>

                <Link to='/signup'
                style={{textDecoration:"none",color:'white'}}
                >
                <button>Sign Up for Free <span><BsArrowRightShort 
                 style={{marginTop:'4px'}}
                size={20}/></span></button>
                </Link>
                

                <div className={styles.downloadOn}>
                <div className={styles.appStore}>
                    <img src='/apple.png' alt='apple'/>
                    <p>Download on the <br/> <span style={{fontSize:'1.0rem', color:"black"}}>App Store</span></p>
                </div>

                <div className={styles.googlePlay}>
                    <img src='/googlePlay.png'
                    alt='google play'
                    />
                    <p>Download on <br/> <span style={{fontSize:'1.0rem', color:"black"}}>Google Play</span></p>
                </div>
                </div>
                
                </div>


              
                <div className={styles.right}>
                <Zoom delay={200}>
                    <img 
                    src='/heroImage.png'
                    alt='heroImage'
                    />
                </Zoom>
                </div>
                
                
                
            </div>
        </div>
    )
}


export default Hero;