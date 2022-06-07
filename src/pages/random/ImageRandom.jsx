import React,{useState} from 'react'
import styles from './ImageRandom.module.css'
import {imageRandom} from '../../api/dog'
import { motion } from 'framer-motion';
import dogShadow from '../../../assets/shadow.png'
export default function ImageRandom() {
    const [image, setImage] = useState("");
    const [loading,setLoading]=useState(true)
    const fetchRandomImage=async()=>{
        const data = await imageRandom()
        setImage(data)
        setLoading(false)
    }

    return (
    <motion.div className={styles.container}
    initial={{opacity:0}}
    animate={{opacity:2}}
    exit={{opacity:0}}
    >
        <div className={styles.contain}>
            {
                loading? <motion.img src={dogShadow} alt=""  className={styles.image}
                initial={{opacity:0,translateX:-20}}
                animate={{opacity:1,translateX:0}}
                transition={{duration:0.5}}
                />: 
                <motion.img src={image} alt=""  className={styles.image}
                initial={{opacity:0,translateX:-20}}
                animate={{opacity:1,translateX:0}}
                transition={{duration:0.5}}
                />
            }
       
        <button onClick={()=>fetchRandomImage()} className={styles.button}>Generate</button>
        </div>
       
    </motion.div>
  )
}
