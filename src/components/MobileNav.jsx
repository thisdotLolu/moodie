import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './MobileNav.module.css'


const MobileNav = ({open,setOpen}) => {

  return (
    <>
    {open && <div className={styles.container}>
        <div className={styles.inner}>
            <FaTimes
            onClick={()=>setOpen(false)}
            className={styles.close}
            size={30}
            />
            <h3>Pricing</h3>
                
                <div className={styles.features}>
                <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/features'>
                <h3
                onClick={()=>setOpen(false)}
                >Features <span><MdArrowDropDown/></span></h3>
                </Link>
      
               <div className={styles.featuresOptions}>
                  <p>Meditate</p>
                  <p>Events</p>
                  <p>Groups</p>
                  <p>Sounds</p>
                </div>
                </div>
                
                
                
                <div
                className={styles.features}
                >
                  <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/use-cases'>
                  <h3
                 onClick={()=>setOpen(false)}
                >Use Cases <span><MdArrowDropDown/></span></h3>
                </Link>
                
                <div className={styles.featuresOptions}>
                  <p>Goals</p>
                  <p>Founder</p>
                  <p>Developer</p>
                </div>
                </div>


                <Link 
                style={{textDecoration:"none"}}
                to='/login'>
                <p>Sign in
                </p>
                </Link>
                
                <Link 
                style={{textDecoration:"none"}}
                to='/signup'>
                <button>Get Started <span><BsArrowRightShort
                size={20}
                /></span></button>
                </Link>
                
        </div>
    </div>}
    </>
    
  )
}

export default MobileNav