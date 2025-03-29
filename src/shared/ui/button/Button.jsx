import React from 'react'
import styles from "./styles.module.css"
const Button = ({img, text}) => {
  return (
    <button className={styles.singUpButton}>{img ? <img src={img} /> : null}{text}</button>
  )
}

export default Button
