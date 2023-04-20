import React from 'react'
import styles from './SectionOne.module.css'


const SectionOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>

            <div className={styles.header}>
                Our Perks
            </div>

            <div className={styles.info}>
                <h2>We Make You Feel at Home!</h2>
                <p>With Moodie, you will hardly miss home.We have tons of activities and sounds that would set you o the go. You can easily plan, have a free mind and network .</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne