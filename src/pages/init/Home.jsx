import React from 'react'
import styles from './Home.module.css'
import {motion} from 'framer-motion'
export default function Home() {
  
    return (
      <motion.div className={styles.container}
        initial={{opacity:0}}
        animate={{opacity:2}}
        exit={{opacity:0}}
      >
        <motion.div className={styles.title}
        initial={{opacity:0,translateY:100}}
        animate={{opacity:1, translateY:-100}}
        transition={{duration:1.5}}
        >
          DOGS
        </motion.div>
      </motion.div>
    )
}