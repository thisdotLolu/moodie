import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {MdArrowDropDown} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = ({open,setOpen}) => {
  const[show, setShow]=useState(false)
  const[show2, setShow2]=useState(false)


  // const handleMouseEnter=()=>{
  //   setHover(true)
  // }
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <Link to='/'>
            <img 
            src='/PlanzerLogo.png'
            alt='logo'
            />
            </Link>
            


            <div className={styles.middleNav}>
                <p>Pricing</p>
                
                <div className={styles.features}
                onMouseEnter={()=>setShow(true)}
                onMouseLeave={()=>setShow(false)}
                >
                <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/features'>
                <p>Features <span><MdArrowDropDown/></span></p>
                </Link>
      
               {show && <div className={styles.featuresOptions}>
                  <p>Meditate</p>
                  <p>Events</p>
                  <p>Groups</p>
                  <p>Sounds</p>
                </div>}
                </div>
                
                
                
                <div
                className={styles.features}
                onMouseEnter={()=>setShow2(true)}
                onMouseLeave={()=>setShow2(false)}
                >
                <p>Use Cases <span><MdArrowDropDown/></span></p>
                {show2 && <div className={styles.featuresOptions}>
                  <p>Goals</p>
                  <p>Founder</p>
                  <p>Developer</p>
                </div>}
                </div>
                
            </div>


            <div className={styles.leftNav}>
                <p>Sign in</p>
                <button>Get Started <span><BsArrowRightShort
                size={20}
                /></span></button>
            </div>

            <div>
              <FaBars
              className={styles.openNav}
              onClick={()=>setOpen(true)}
              size={30}
              />
            </div>
        </div>

    </div>
  )
}

export default Navbar