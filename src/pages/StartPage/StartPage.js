import React from 'react'
import Greet from '../../components/Greet/Greet'
import style from './StartPage.module.css'

const StartPage = () => {
  return (
    <section className={style.welcome}>
      <Greet valueBtn="Start" />
    </section>
  )
}

export default StartPage
