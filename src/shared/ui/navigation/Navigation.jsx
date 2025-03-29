import React from 'react'
import human from "../../assets/User.png"
import styles from "./styles.module.css"
import Button from '../button/Button'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_li}>Marketplace</div>
      <div className={styles.nav_li}>Rankings</div>
      <div className={styles.nav_li}>Connect a wallet</div>
      <Button img={human} text={"Sing Up"}/>
    </nav>
  )
}

export default Navigation
