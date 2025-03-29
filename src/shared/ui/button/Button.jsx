import React from 'react'
import styles from "./styles.module.css"
const Button = ({img, text, p}) => {
  return (
    <button className={styles.singUpButton} style={{paddingLeft:p+"px", paddingRight: p+"px"}}>{img ? <img src={img} /> : null}{text}</button>
  )
}

export default Button
