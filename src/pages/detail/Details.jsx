import React,{useEffect,useState} from 'react'
import {imageDetailDog} from '../../api/dog'
import styles from './Details.module.css'
import { motion } from 'framer-motion';


const container = {
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.8,
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

export default function Details() {
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  

  const fetchImagesDog=async()=>{
    const data = await imageDetailDog()
    setImages(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchImagesDog()
  }, []);

  if(loading){
    return <p>Loading...</p>
  }
  return(
     <motion.div className={styles.container}
     initial={{opacity:0}}
     animate={{opacity:2}}
     exit={{opacity:0}}
     >
     <h1>raa</h1>
      <motion.div variants={container} initial="hidden" whileInView="show">
      {
          images.map((img,idx)=>{
            return(
              <motion.img 
              variants={children}
              key={idx} src={img} />
            )
          })
        }
      </motion.div>
     </motion.div>

   )
}
