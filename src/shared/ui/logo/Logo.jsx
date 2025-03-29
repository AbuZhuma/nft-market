import React from 'react'
import logo from "../../assets/Storefront.png"
import styles from "./styles.module.css"
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} />
      <p>NFT marketplace</p>
    </div>
  )
}

export default Logo
