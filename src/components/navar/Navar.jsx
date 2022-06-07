import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navar.module.css'
export default function Navar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
        <Link to={"/"} className={styles.link} ><p >Home</p>  </Link>
        <Link to={"/Random"} className={styles.link}><p >Image Random</p> </Link>
        <Link to={"/List"} className={styles.link}><p >Dogs List</p> </Link>
        </div>
    </nav>
  )
}
