import React from 'react'
import styles from './Navbar.module.css'
import {MdArrowDropDown} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <img 
            src='/PlanzerLogo.png'
            alt='logo'
            />


            <div className={styles.middleNav}>
                <p>Pricing</p>
                <p>Features <span><MdArrowDropDown/></span></p>
                <p>Use Cases <span><MdArrowDropDown/></span></p>
            </div>


            <div className={styles.leftNav}>
                <p>Sign in</p>
                <button>Get Started <span><BsArrowRightShort
                size={20}
                /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar