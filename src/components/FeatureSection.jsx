import React from 'react'
import styles from './FeatureSection.module.css'


const FeatureSection = ({iconSrc,header, text, imgSrc,absoluteImg}) => {
  return (
    <div className={styles.container}>
    <div className={styles.inner}>
        <div className={styles.left}>
        <img 
        className={styles.icon}
        src={iconSrc}
        alt='icon'
        />

        <h2>{header}</h2>

        <p>{text}</p>
        </div>

        <div className={styles.right}>
           { 
           absoluteImg && <img
            className={styles.absolute_img}
            src={absoluteImg}
            alt='productivity'
            />}
            <img
            className={styles.main_img} 
            src={imgSrc}
            alt='FeaturePic'
            />  
        </div>
        
    </div>
    </div>
  )
}

export default FeatureSection