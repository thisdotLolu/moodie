import React from 'react';
import { BsArrowRightShort, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import styles from './Footer.module.css'
import {FaFacebookF} from 'react-icons/fa'



const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.top}>
            <div className={styles.left}>
                <img src='/moodieLogo.png'
                alt='moodie'
                />
                <p>Stay organized and productive with Moodie.io</p>
                <p>Subscribe to our newsletter</p>

                <input
                type='text'
                placeholder='Enter your email address'

                />
                
                <button>Subscribe<span><BsArrowRightShort size={20}/></span></button>
            </div>

            <div className={styles.right}>
                <div>
                    <h2>Company</h2>

                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Terms And Conditions</p>
                    <p>Blog</p>
                </div>

                <div>
                    <h2>Features</h2>

                    <p>Sounds</p>
                    <p>Events</p>
                    <p>Mood Tracker</p>
                    <p>Group</p>
                </div>

                <div>
                   <h2>Product</h2> 

                   <p>Help Center</p>
                   <p>Roadmap</p>
                   <p style={{color:'transparent'}}>a</p>
                   <p style={{color:'transparent'}}>a</p>
                </div>
            </div>
            </div>
            

            

            <div className={styles.bottom}>
            <div className={styles.bottomRight}>
                <FaFacebookF
                style={{color:' #1877F2'}}
                />
                <BsTwitter
                style={{color:'#1d9bf0'}}
                />
                <img 
                src='/instagram.png'
                alt='instagram'
                />
                </div>

                <div>
                    <p>Copyright © 2022. Moodie.io All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;