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
            src='/moodieLogo.png'
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
               <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/features'>
                <p>Meditate</p>
                </Link>
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
                   <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/use-cases'>
                <p>Use Cases<span><MdArrowDropDown/></span></p>
                </Link>
{/* <p>Use Cases <span><MdArrowDropDown/></span></p> */}
                {show2 && <div className={styles.featuresOptions}>
                <Link 
                style={{textDecoration:'none',color:'black'}}
                to='/use-cases'>
                <p>Goals</p>
                </Link>
                  <p>Founder</p>
                  <p>Developer</p>
                </div>}
                </div>
                
            </div>


            <div className={styles.leftNav}>
               
               <Link to='/login'
               style={{textDecoration:'none'}}
               >
               <p>Sign in</p>
               </Link>
                
                <Link 
                style={{textDecoration:'none'}}
                to='/signup'>
                <button>
                  Get Started <span><BsArrowRightShort
                  style={{marginTop:'4px'}}
                size={20}
                /></span>
                </button>
              </Link>
            </div>

            
              <FaBars
              className={styles.openNav}
              onClick={()=>setOpen(true)}
              size={30}
              />
            
        </div>

    </div>
  )
}

export default Navbar