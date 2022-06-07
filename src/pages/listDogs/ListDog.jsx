import React from 'react'
import Grid from '../../components/Grid/Grid';
import styles from './ListDog.module.css'
import { motion } from 'framer-motion';
export default function ListDog() {
  return (
    <motion.div className={styles.container}
    initial={{opacity:0}}
    animate={{opacity:2}}
    exit={{opacity:0}}>
       <Grid/>
    </motion.div>
  )
}
