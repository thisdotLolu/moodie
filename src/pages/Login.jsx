import React from 'react'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'
import styles from './SignUp.module.css'
import Slider from '../components/AuthSlider'

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.left}>
                {/* <Slider/> */}
            </div>

            <div className={styles.right}>
                <FaTimes
                className={styles.faTimes}
                />

                <div className={styles.header}>
                    <FaArrowLeft/>

                    <h2>Hello Moodies!</h2>
                    <div></div>
                </div>


                <div className={styles.formSection}>
                    <form>
                        <div
                        
                        >
                        <label>
                           <p>First name</p> 
                            <input
                            type='text'                        
                            />
                        </label>
                        {/* <label>
                            <p>Last name</p>
                            <input
                            type='text'                        
                            />
                        </label> */}
                        </div>
                        

                        <div>
                        <label>
                            <p>Email</p>
                            
                            <input
                            type='text'                        
                            />
                        </label>

                        {/* <label>

                            <p>Phone Number</p>
                            
                            <input
                            type='text'                        
                            />
                        </label> */}
                        
                        </div>

                        <div>
                        <label>
                            
                            <p>Password</p>
                            <input
                            type='text'                        
                            />
                        </label>

                        {/* <label>
                            <p>Confirm Password</p>
                            
                            <input
                            type='text'                        
                            />
                        </label> */}
                        </div>
                    </form>
                </div>

                <div
                className={styles.agree}
                >
                    {/* <input
                    type='checkbox'
                    />
                    <span>By clicking here, I state that I have read and understood the terms and conditions</span> */}
                    
                    <button
                    style={{width:'95%'}}
                    >
                        Sign Up
                    </button>

                    {/* <p>Already have an account? <span style={{color:'#5F51C2'}}>Log In</span></p> */}

                    <div className={styles.line}>
                        <div></div>
                        <p>Or sign up with</p> 
                        <div></div>
                    </div>

                    <div>
                        <img
                        src='/googlelogo.png'
                        alt='google'
                        />

                        <img src="
                        /fblogo.png
                        " alt="
                        fblogo" />
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Login