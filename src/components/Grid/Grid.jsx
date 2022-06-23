import React,{useState,useEffect} from 'react'
import { getAllDogs,  } from '../../api/dog'
import Card from '../card/Card';
import styles from './Grid.module.css'
import { motion } from 'framer-motion';

const container = {
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 4.8,
      },
  },
  hidden: {
      opacity: 0
  },
};

const children = {
  show: {
      opacity: 1
  },
  hidden: {
      opacity: 0
  }

}

export default function Grid() {
  const [dogsName, setDogsName] = useState([]);

  const fetchData = async () => {
  
    try {
      const data = await getAllDogs("/breeds/list/all")
      setDogsName(data)

    } catch (error) {
      console.log("error", error)
    }

  }
  useEffect(() => {
    fetchData()
  }, []);
  

  return (
   
    <motion.div className={styles.container}
    variants={container}
    initial='hidden'
    animate='show'
    >
      {
      Object.keys(dogsName).map((dog,idx) => {
            return (
              <Card key={idx} name={dog}  variants={children}/>
            )
  
          })}
    </motion.div>

  )
}
