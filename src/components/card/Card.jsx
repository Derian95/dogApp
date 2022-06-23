import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Card({name}) {
  return (

    <Link to={"/Details/"+name} className={styles.link}>
    <motion.div className={styles.container}
   
    >
      <h2>{name}</h2>
    </motion.div>
    </Link>
    
  )
}
