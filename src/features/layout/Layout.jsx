import React from 'react'
import Header from './ui/header/Header'
import Footer from './ui/footer/Footer'
import styles from "./styles.module.css"

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
