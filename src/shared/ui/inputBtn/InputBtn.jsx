import React from 'react'
import styles from "./styles.module.css"
import Button from '../button/Button'

const InputBtn = () => {
  return (
    <div className={styles.inputBtn}>
      <input type="text"placeholder='Enter your email here'/>
      <Button text={"Subscribe"}/>
    </div>
  )
}

export default InputBtn
