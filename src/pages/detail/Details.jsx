import React,{useEffect,useState} from 'react'
import {imageDetailDog} from '../../api/dog'
import styles from './Details.module.css'
import { motion } from 'framer-motion';
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
      <div>
      {
          images.map((img,idx)=>{
            return(
              <motion.img 
              initial={{opacity:0,translateX:-50,translateY:-50}}
              animate={{opacity:1,translateX:0,translateY:0}}
              transition={{duration:0.3, delay:0.05}}
              key={idx} src={img} />
            )
          })
        }
      </div>
     </motion.div>

   )
}
