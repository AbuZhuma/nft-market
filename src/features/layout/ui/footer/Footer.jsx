import React from 'react'
import styles from "./styles.module.css"
import Logo from '../../../../shared/ui/logo/Logo'
import InputBtn from '../../../../shared/ui/inputBtn/InputBtn'
import Discord from "../../../../shared/assets/DiscordLogo.svg"
import Insta from "../../../../shared/assets/InstagramLogo.svg"
import Twitter from "../../../../shared/assets/TwitterLogo.svg"
import YouTube from "../../../../shared/assets/YoutubeLogo.svg"

const Footer = () => {
  return (
   <footer className={styles.footer}>
      <div className={styles.column}>
            <p><Logo/></p>
            <p className={styles.def_p}>NFT marketplace UI created with Anima for Figma.</p>
            <p className={styles.def_p}>Join our community</p>
            <div className={styles.social}>
                  <img src={Discord}/>
                  <img src={Insta}/>
                  <img src={Twitter}/>
                  <img src={YouTube}/>
            </div>
      </div>
      <div className={styles.column}>
            <p className={styles.col_head}>Explore</p>
            <p className={styles.def_p}>Marketplace</p>
            <p className={styles.def_p}>Rankings</p>
            <p className={styles.def_p}>Connect a wallet</p>
      </div>
      <div className={styles.column}>
            <p className={styles.col_head}>Join our weekly digest</p>
            <p className={styles.def_p}>Get exclusive promotions & updates straight to your inbox.</p>
            <InputBtn/>
      </div>
      <div className={styles.butt}>
      Ⓒ NFT Market. Use this template freely.
      </div>
   </footer>
  )
}

export default Footer
