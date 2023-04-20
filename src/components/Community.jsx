import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import styles from './Community.module.css'


const Community = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <img src='/people.png'
            alt='people'
            />
            </div>
            
            <div className={styles.right}>
                <h3>We Know what Community means to you</h3>
                <p>We have various sections of events and cultural activities on our app. Groups in Moodie is the best place to meet people and join groups of people from your home country.</p>

                <p>Check out our community <BsArrowRightShort/></p>
            </div>
        </div>
    </div>
  )
}

export default Community