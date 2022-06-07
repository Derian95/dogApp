import React,{useState,useEffect} from 'react'
import { getAllDogs,  } from '../../api/dog'
import Card from '../card/Card';
import styles from './Grid.module.css'


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
    <div className={styles.container}
   
    >
      {Object.keys(dogsName).map((dog,idx) => {
            return (
              <Card key={idx} name={dog} />
            )
  
          })}
    </div>
  )
}
