import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import styles from './SectionThree.module.css'


const SectionThree = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <h2>Home in Your Pocket</h2>
            <p>With our mental health app, international students can carry a piece and comfort of home in their pockets. We have various sections of events and cultural activities on our app.</p>
            <button>Get Started <span><BsArrowRightShort size={20}/></span></button>
            </div>

            <div className={styles.right}>
                <img
                src='/sectionthreeimg.png'
                alt='phone'
                />
            </div>
            
        </div>
    </div>
  )
}

export default SectionThree