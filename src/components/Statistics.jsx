import React from 'react'
import styles from './Statistics.module.css'


const Statistics = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div>
                <h2>67k</h2>
                <p>Happy Users</p>
            </div>

            <div>
                <h2>180</h2>
                <p>Universities</p>
            </div>

            <div>
                <h2>160</h2>
                <p>Countries Covered</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics