import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Card({name}) {
  return (

    <Link to={"/Details/"+name} className={styles.link}>
    <motion.div className={styles.container}
    initial={{opacity:0,translateX:-50,translateY:-50}}
    animate={{opacity:1,translateX:0,translateY:0}}
    transition={{duration:0.3, delay:0.05}}
    >
      <h2>{name}</h2>
    </motion.div>
    </Link>
    
  )
}
