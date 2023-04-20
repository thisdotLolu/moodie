import React from 'react'
import styles from './SectionTwo.module.css'


const SectionTwo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.header}>Our Perks</div>

            <div className={styles.eachContainer}>
                <div>
                    <img src='/OrganizeIcon.png'
                    alt='organise'
                    />
                    <h3>Meditate, sleep & Relax</h3>
                    <p>We know how hectic being a student is. We give you series of meditation, sleep and calm sounds to keep you at peace.</p>
                </div>

                <div>
                <img src='/GoalsIcon.png'
                    alt='goals'
                    />
                    <h3>Cultural Sounds</h3>
                    <p>We give you varieties of sounds from your home country . Those sounds that give the nostalgic feeling and makes ylu remember home.</p>
                </div>

                <div>
                <img src='/Track Icon.png'
                    alt='track'
                    />
                    <h3>Track progress</h3>
                    <p>Moodie can easily track your mental health progress along daily, weekly, monthly and yearly lines.</p>
                </div>

                <div>
                <img src='/Limit Icon.png'
                    alt='groups'
                    />
                    <h3>Groups</h3>
                    <p>We give you the choice of joining various groups that will be of help to you.You’d get to meet people from different spheres of life.</p>
                </div>

                <div>
                <img src='/Accountability Icon.png'
                    alt='accountability'
                    />
                    <h3>Events</h3>
                    <p>We give you the choice of joining various groups that will be of help to you.You’d get to meet people from different spheres of life.</p>
                </div>

                <div>
                <img src='/Calendar Icon.png'
                    alt='calender'
                    />
                    <h3>Calendar Overview</h3>
                    <p>Moodie gives you an option to check your dates and we have partnered with other calendar API companies to set reminders .</p>
                </div>
            </div>

                
        </div>
    </div>
  )
}

export default SectionTwo