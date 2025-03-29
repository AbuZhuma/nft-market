import React from 'react'
import Logo from '../../../../shared/ui/logo/Logo'
import Navigation from '../../../../shared/ui/navigation/Navigation'
import styles from "./styles.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Navigation/>
    </header>
  )
}

export default Header
