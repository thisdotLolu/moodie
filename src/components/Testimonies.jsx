import React from 'react'
import styles from './Testimonials.module.css'


const Testimonies = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.header}>Testimonies</div>

            <div className={styles.content}>
                <p>We are a known global force . Moodie has become a well recognised app among universities  worldwide.Here are some of the reviews gotten from our top users</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonies